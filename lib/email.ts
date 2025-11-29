import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp?: string;
}

// Function to compile Handlebars template
function compileTemplate(templateName: string, data: EmailData): string {
  const templatePath = path.join(
    process.cwd(),
    "lib",
    "email-templates",
    `${templateName}.hbs`
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8");
  const template = Handlebars.compile(templateSource);
  return template(data);
}

// Send customer confirmation email
export async function sendCustomerConfirmation(data: EmailData) {
  try {
    const html = compileTemplate("customer-confirmation", data);

    const info = await transporter.sendMail({
      from: `"Weekend Catering" <${process.env.EMAIL_FROM}>`,
      to: data.email,
      subject: "Köszönjük érdeklődését - Weekend Catering",
      html: html,
    });

    console.log("Customer confirmation sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending customer confirmation:", error);
    return { success: false, error };
  }
}

// Send owner notification email
export async function sendOwnerNotification(data: EmailData) {
  try {
    // Add timestamp
    const dataWithTimestamp = {
      ...data,
      timestamp: new Date().toLocaleString("hu-HU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const html = compileTemplate("owner-notification", dataWithTimestamp);

    const info = await transporter.sendMail({
      from: `"Weekend Catering Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 Új ajánlatkérés érkezett - ${data.name}`,
      html: html,
      replyTo: data.email,
    });

    console.log("Owner notification sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending owner notification:", error);
    return { success: false, error };
  }
}

// Send both emails
export async function sendContactEmails(data: EmailData) {
  const results = await Promise.allSettled([
    sendCustomerConfirmation(data),
    sendOwnerNotification(data),
  ]);

  const customerResult = results[0];
  const ownerResult = results[1];

  return {
    customerEmail:
      customerResult.status === "fulfilled" ? customerResult.value : null,
    ownerEmail: ownerResult.status === "fulfilled" ? ownerResult.value : null,
    success:
      customerResult.status === "fulfilled" &&
      ownerResult.status === "fulfilled",
  };
}
