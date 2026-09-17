"use client";

import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

export interface ContactFormProps {
  heading: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const NAME_PATTERN = /^[A-Za-z\s]+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_CHARS = /^[0-9+\-\s]*$/;
const PHONE_MIN_DIGITS = 8;
const PHONE_MAX_DIGITS = 15;

function validateField(field: keyof FormValues, value: string): string | undefined {
  switch (field) {
    case "name": {
      const trimmed = value.trim();
      if (!trimmed) return "Please enter your full name";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
      if (!NAME_PATTERN.test(trimmed)) return "Name can only contain letters and spaces";
      return undefined;
    }
    case "email": {
      const trimmed = value.trim();
      if (!trimmed) return "Please enter your email address";
      if (!EMAIL_PATTERN.test(trimmed)) return "Please enter a valid email address";
      return undefined;
    }
    case "phone": {
      const trimmed = value.trim();
      if (!trimmed) return "Please enter your phone number";
      if (!PHONE_ALLOWED_CHARS.test(trimmed)) return "Enter a valid phone number";
      const digitCount = trimmed.replace(/\D/g, "").length;
      if (digitCount < PHONE_MIN_DIGITS || digitCount > PHONE_MAX_DIGITS) return "Enter a valid phone number";
      return undefined;
    }
    case "message": {
      if (value && value.trim().length < 5) return "Message must be at least 5 characters";
      return undefined;
    }
    default:
      return undefined;
  }
}

export default function ContactForm({ heading }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitized = e.target.value.replace(/[^0-9+\-\s]/g, "");
    setValues((prev) => ({ ...prev, phone: sanitized }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof FormValues;
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const dismissSuccess = () => setIsSuccess(false);
  const dismissError = () => setSubmitError(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard against double submission (e.g. rapid Enter presses) beyond the button's own disabled state.
    if (isSubmitting) return;

    const nextErrors: FormErrors = {
      name: validateField("name", values.name),
      email: validateField("email", values.email),
      phone: validateField("phone", values.phone),
      message: validateField("message", values.message),
    };
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error();
      }

      setIsSuccess(true);
      setValues(INITIAL_VALUES);
      setErrors({});

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setSubmitError("Something went wrong while sending your message. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-md p-4 md:p-8 space-y-4 md:space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">{heading}</h2>
      </div>

      {isSuccess && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3.5 text-green-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm flex-1">
            Thank you! Your enquiry has been sent.
          </p>
          <button
            type="button"
            onClick={dismissSuccess}
            aria-label="Dismiss success message"
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      )}

      {submitError && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3.5 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-600"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm flex-1">{submitError}</p>
          <button
            type="button"
            onClick={dismissError}
            aria-label="Dismiss error message"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Sarah Jenkins"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.name)}
            className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus:border-primary transition-colors ${
              errors.name ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-primary"
            }`}
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="sarah@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.email)}
              className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus:border-primary transition-colors ${
                errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-primary"
              }`}
            />
            {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="0400 000 000"
              maxLength={15}
              value={values.phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.phone)}
              className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus:border-primary transition-colors ${
                errors.phone ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-primary"
              }`}
            />
            {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            Message / Symptoms
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about what you are experiencing or what you would like to achieve..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.message)}
            className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus:border-primary transition-colors resize-none ${
              errors.message ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-primary"
            }`}
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-6 py-3.5 font-semibold tracking-wide shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <span aria-hidden="true">→</span>}
        </button>
      </form>
    </div>
  );
}
