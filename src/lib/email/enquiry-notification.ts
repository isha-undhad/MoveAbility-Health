// Internal "New enquiry received" notification email — sent to the business inbox
// whenever the website contact form is submitted. Plain inline-styled, table-based
// HTML (no Tailwind, no external stylesheet) for maximum email-client compatibility.

export interface EnquiryNotificationData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Preserve intentional line breaks in the visitor's message without allowing HTML injection.
function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br>");
}

export function buildEnquiryNotificationEmail(data: EnquiryNotificationData): {
  html: string;
  text: string;
} {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = data.phone && data.phone.trim() ? escapeHtml(data.phone) : "Not provided";
  const messageHtml = escapeHtmlMultiline(data.message);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New enquiry received</title>
  </head>
  <body style="margin:0; padding:0; background-color:#eef2f1; font-family:'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef2f1; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; width:100%; background-color:#ffffff; border:1px solid #e3e8e6; border-radius:14px; overflow:hidden;">
            <!-- Header band -->
            <tr>
              <td style="background-color:#1f4d43; padding:32px 40px; text-align:center;">
                <p style="margin:0 0 8px 0; font-size:12px; font-weight:bold; letter-spacing:2px; text-transform:uppercase; color:#bcd9cd;">
                  MoveAbility Health
                </p>
                <p style="margin:0; font-size:24px; font-weight:bold; color:#ffffff;">
                  Enquiry received
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 40px 8px 40px;">
                <p style="margin:0 0 28px 0; font-size:15px; line-height:1.6; color:#333333;">
                  A new enquiry has been submitted through the website.
                </p>

                <p style="margin:0 0 12px 0; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#1f4d43;">
                  Contact Details
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px 0;">
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #e3e8e6; font-size:14px; color:#6b7280; width:90px;">Name</td>
                    <td style="padding:10px 0; border-bottom:1px solid #e3e8e6; font-size:14px; color:#111827; font-weight:600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; border-bottom:1px solid #e3e8e6; font-size:14px; color:#6b7280;">Email</td>
                    <td style="padding:10px 0; border-bottom:1px solid #e3e8e6; font-size:14px; color:#111827; font-weight:600;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; font-size:14px; color:#6b7280;">Phone</td>
                    <td style="padding:10px 0; font-size:14px; color:#111827; font-weight:600;">${phone}</td>
                  </tr>
                </table>

                <p style="margin:0 0 12px 0; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#1f4d43;">
                  Enquiry Message
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 8px 0; background-color:#f4f8f6; border:1px solid #dfe8e4; border-left:3px solid #1f4d43; border-radius:8px;">
                  <tr>
                    <td style="padding:16px 20px; font-size:14px; line-height:1.7; color:#333333; font-style:italic;">
                      ${messageHtml}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 40px 40px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="border-top:1px solid #e3e8e6; padding-top:24px; text-align:center;">
                      <p style="margin:0; font-size:14px; font-weight:bold; color:#1f4d43;">MoveAbility Health</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "New enquiry received - MoveAbility Health",
    "",
    "A new enquiry has been submitted through the website.",
    "",
    "Contact Details",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone && data.phone.trim() ? data.phone : "Not provided"}`,
    "",
    "Enquiry Message",
    data.message,
  ].join("\n");

  return { html, text };
}
