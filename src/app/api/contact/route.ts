import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildEnquiryNotificationEmail } from "@/lib/email/enquiry-notification";

// Prevent this route from being statically analyzed/cached — it must run per-request on the server.
export const dynamic = "force-dynamic";

// --- Basic input limits (defense against oversized/malformed payloads) ---
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_PHONE_LENGTH = 30;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_BODY_BYTES = 20_000; // ~20KB is generous for a contact form payload

// Reasonably strict, not fully RFC-5322 exhaustive — good enough to catch typos/garbage.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

// Strip characters that could be used for header/CRLF injection in email headers (name, email, phone).
function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  // --- Reject oversized payloads before parsing ---
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, message: "Request payload is too large." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = body as Partial<ContactPayload>;

  // --- Required-field validation ---
  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // --- Length validation (guards against oversized individual fields) ---
  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    (typeof phone === "string" && phone.length > MAX_PHONE_LENGTH)
  ) {
    return NextResponse.json(
      { success: false, message: "One or more fields exceed the allowed length." },
      { status: 400 }
    );
  }

  // --- Email format validation ---
  const trimmedEmail = email.trim();
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const safeName = sanitizeHeaderValue(name);
  const safeEmail = sanitizeHeaderValue(trimmedEmail);
  const safePhone = typeof phone === "string" && phone.trim() ? sanitizeHeaderValue(phone) : undefined;
  const safeMessage = message.trim();

  // --- SMTP configuration (server-side only; never sent to the client) ---
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USERNAME, SMTP_PASSWORD, NOTIFICATION_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USERNAME || !SMTP_PASSWORD) {
    // Do not leak which variables are missing or any credential values.
    console.error("Contact form: SMTP configuration is incomplete.");
    return NextResponse.json(
      { success: false, message: "The contact form is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const { html, text } = buildEnquiryNotificationEmail({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      message: safeMessage,
    });

    await transporter.sendMail({
      from: SMTP_USERNAME,
      to: NOTIFICATION_EMAIL || SMTP_USERNAME,
      replyTo: safeEmail,
      subject: "New Contact Form Submission - MoveAbility Health",
      text,
      html,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! Your enquiry has been sent." },
      { status: 200 }
    );
  } catch (error) {
    // Log only a generic error server-side — never the SMTP credentials.
    console.error("Contact form: failed to send email.", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { success: false, message: "Failed to send your message. Please try again later." },
      { status: 502 }
    );
  }
}
