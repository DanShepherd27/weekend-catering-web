"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { submitContactForm } from "@/app/actions/contact";
import { useState, useTransition, useEffect, useRef } from "react";
import "altcha";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [altchaPayload, setAltchaPayload] = useState<string>("");
  const altchaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleStateChange = (ev: Event) => {
      const customEvent = ev as CustomEvent;
      if (customEvent.detail?.payload) {
        setAltchaPayload(customEvent.detail.payload);
      }
    };

    const widget = altchaRef.current;
    if (widget) {
      widget.addEventListener("statechange", handleStateChange);
      return () => {
        widget.removeEventListener("statechange", handleStateChange);
      };
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      altchaPayload: altchaPayload,
    };

    startTransition(async () => {
      const result = await submitContactForm(data);

      if (result.success) {
        setMessage({ type: "success", text: result.message || "" });
        // Reset form and Altcha
        (e.target as HTMLFormElement).reset();
        setAltchaPayload("");
        if (altchaRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (altchaRef.current as any).reset();
        }
      } else {
        setMessage({ type: "error", text: result.error || "" });
      }
    });
  };

  return (
    <section id="contact-form" className="w-full py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#ff1100] rounded-[20px] md:rounded-[37px] shadow-lg overflow-hidden p-3 md:p-6 lg:p-8">
          <h2 className="text-[16px] md:text-[20px] font-bold text-white uppercase mb-4 md:mb-6">
            Ajánlatkérés
          </h2>

          {message && (
            <div
              className={`mb-4 p-3 md:p-4 rounded-[14px] md:rounded-[22px] text-[12px] md:text-[14px] font-bold uppercase ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
              <Input
                type="text"
                name="name"
                placeholder="NÉV"
                required
                disabled={isPending}
                className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
                <Input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  disabled={isPending}
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
              <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefonszám"
                  required
                  disabled={isPending}
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
            </div>

            {/* Event Type Field */}
            <div className="bg-white rounded-[14px] md:rounded-[22px] shadow-lg overflow-hidden">
              <Textarea
                name="message"
                placeholder="rendezvény jellege"
                required
                disabled={isPending}
                className="h-[150px] md:h-[300px] text-[12px] md:text-[14px] px-3 md:px-6 py-3 md:py-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase resize-none font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Altcha Widget */}
            <div className="flex justify-center">
              <altcha-widget
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={altchaRef as any}
                challengeurl="/api/altcha/challenge"
                hidefooter
                style={{
                  "--altcha-max-width": "100%",
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-end pt-2">
              <button
                type="submit"
                disabled={isPending || !altchaPayload}
                className="bg-white border-[#ff1100] border-2 rounded-[20px] md:rounded-[30px] shadow-lg px-4 md:px-8 py-2 md:py-3 hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <p
                  className="text-[14px] md:text-[16px] font-bold text-[#ff1100] uppercase"
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                  }}
                >
                  {isPending ? "Küldés..." : "Ajánlatkérés"}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
