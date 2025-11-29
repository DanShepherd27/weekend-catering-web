import { generateAltchaChallenge } from "@/app/actions/altcha";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await generateAltchaChallenge();

  if (result.success) {
    return NextResponse.json({
      algorithm: result.algorithm,
      challenge: result.challenge,
      salt: result.salt,
      signature: result.signature,
    });
  } else {
    return NextResponse.json(
      { error: "Failed to generate challenge" },
      { status: 500 }
    );
  }
}
