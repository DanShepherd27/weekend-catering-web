"use server";

import { sendContactEmails } from "@/lib/email";
import { verifyAltchaSolution } from "./altcha";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  altchaPayload?: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Verify Altcha challenge first
    if (!data.altchaPayload) {
      return {
        success: false,
        error: "Kérjük, töltse ki a CAPTCHA ellenőrzést.",
      };
    }

    const altchaVerification = await verifyAltchaSolution(data.altchaPayload);
    if (!altchaVerification.success) {
      return {
        success: false,
        error: "CAPTCHA ellenőrzés sikertelen. Kérjük, próbálja újra.",
      };
    }

    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.message) {
      return {
        success: false,
        error: "Kérjük, töltse ki az összes mezőt.",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Kérjük, adjon meg egy érvényes email címet.",
      };
    }

    // Send emails
    const result = await sendContactEmails({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    if (result.success) {
      return {
        success: true,
        message:
          "Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.",
      };
    } else {
      return {
        success: false,
        error:
          "Hiba történt az üzenet küldése során. Kérjük, próbálja újra később.",
      };
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return {
      success: false,
      error: "Váratlan hiba történt. Kérjük, próbálja újra később.",
    };
  }
}
