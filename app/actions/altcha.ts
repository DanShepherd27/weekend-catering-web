"use server";

import { createChallenge, verifySolution } from "altcha-lib";

const ALTCHA_HMAC_KEY = process.env.ALTCHA_HMAC_KEY || "secret-hmac-key";

/**
 * Generate a new Altcha challenge
 */
export async function generateAltchaChallenge() {
  try {
    const challenge = await createChallenge({
      hmacKey: ALTCHA_HMAC_KEY,
      // Lower maxnumber for faster solving (good for UX)
      maxnumber: 50000,
      // Set algorithm
      algorithm: "SHA-256",
      // Salt to make it unique
      salt: crypto.randomUUID(),
    });

    return {
      success: true,
      challenge: challenge.challenge,
      salt: challenge.salt,
      algorithm: challenge.algorithm,
      signature: challenge.signature,
    };
  } catch (error) {
    console.error("Error generating Altcha challenge:", error);
    return {
      success: false,
      error: "Failed to generate challenge",
    };
  }
}

/**
 * Verify an Altcha solution
 */
export async function verifyAltchaSolution(payload: string) {
  try {
    const isValid = await verifySolution(payload, ALTCHA_HMAC_KEY);

    return {
      success: isValid,
    };
  } catch (error) {
    console.error("Error verifying Altcha solution:", error);
    return {
      success: false,
      error: "Failed to verify solution",
    };
  }
}
