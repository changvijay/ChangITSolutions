import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
};

type ApiResponse = {
  message: string;
};

const sanitize = (value: string) => value.replace(/[<>]/g, "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, company, message } = req.body as ContactRequestBody;

  const trimmedFirstName = firstName?.trim();
  const trimmedLastName = lastName?.trim();
  const trimmedEmail = email?.trim();
  const trimmedCompany = company?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const isSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (!host || !user || !pass) {
    console.error("Contact form submission failed: SMTP configuration is incomplete.");
    return res.status(500).json({ message: "Email service is not configured. Please try again later." });
  }

  const transporter = nodemailer.createTransport({
    host,
    port: smtpPort,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
  });

  const safeCompany = trimmedCompany ? sanitize(trimmedCompany) : "Not provided";
  const safeMessage = sanitize(trimmedMessage).replace(/\n/g, "<br />");

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? user,
  to: process.env.CONTACT_RECIPIENT_EMAIL ?? "changvijay54@gmail.com",
  replyTo: trimmedEmail,
      subject: `New enquiry from ${sanitize(trimmedFirstName)} ${sanitize(trimmedLastName)}`,
      text: `Name: ${trimmedFirstName} ${trimmedLastName}\nEmail: ${trimmedEmail}\nCompany: ${trimmedCompany ?? "Not provided"}\n\nMessage:\n${trimmedMessage}`,
      html: `<p><strong>Name:</strong> ${sanitize(trimmedFirstName)} ${sanitize(trimmedLastName)}</p>
        <p><strong>Email:</strong> ${sanitize(trimmedEmail)}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
             <p><strong>Message:</strong><br />${safeMessage}</p>`,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return res.status(500).json({ message: "Failed to send message. Please try again later." });
  }
}
