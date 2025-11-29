"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { submitContactForm } from "@/app/actions/contact";
import { useState, useTransition, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [altchaPayload, setAltchaPayload] = useState<string>("");
  const altchaRef = useRef<HTMLElement>(null);
  const [isAltchaLoaded, setIsAltchaLoaded] = useState(false);

  // Zod schema for form validation
  const contactSchema = z.object({
    name: z.string().min(1, "A név megadása kötelező"),
    email: z.string().email("Érvénytelen email cím"),
    phone: z
      .string()
      .min(7, "A telefonszám túl rövid")
      .regex(/^[\d\s()+-]+$/, "Érvénytelen karakterek a telefonszámban"),
    message: z.string().min(1, "Kérlek add meg a rendezvény jellegét"),
    altchaPayload: z.string().min(1, "Ellenőrzés szükséges"),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit: rhHandleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      altchaPayload: "",
    },
  });

  // Load altcha only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("altcha").then(() => {
        setIsAltchaLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!isAltchaLoaded) return;
    const handleStateChange = (ev: Event) => {
      const customEvent = ev as CustomEvent;
      if (customEvent.detail?.payload) {
        setAltchaPayload(customEvent.detail.payload);
        // Update the react-hook-form value so the form becomes valid
        setValue("altchaPayload", customEvent.detail.payload, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };

    const widget = altchaRef.current;
    if (widget) {
      widget.addEventListener("statechange", handleStateChange);
      return () => {
        widget.removeEventListener("statechange", handleStateChange);
      };
    }
  }, [isAltchaLoaded, setValue]);

  const onSubmit = async (values: ContactFormValues) => {
    setMessage(null);
    startTransition(async () => {
      const result = await submitContactForm(values);

      if (result.success) {
        setMessage({ type: "success", text: result.message || "" });
        // Reset form and Altcha
        reset();
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

          <form
            className="space-y-2 md:space-y-3"
            onSubmit={rhHandleSubmit(onSubmit)}
            noValidate
          >
            {/* Validation Errors */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-4 p-3 md:p-4 rounded-[14px] md:rounded-[22px] bg-red-100 text-red-800">
                <ul className="space-y-1">
                  {errors.name && (
                    <li className="text-[12px] md:text-[14px] font-bold uppercase">
                      {errors.name.message}
                    </li>
                  )}
                  {errors.email && (
                    <li className="text-[12px] md:text-[14px] font-bold uppercase">
                      {errors.email.message}
                    </li>
                  )}
                  {errors.phone && (
                    <li className="text-[12px] md:text-[14px] font-bold uppercase">
                      {errors.phone.message}
                    </li>
                  )}
                  {errors.message && (
                    <li className="text-[12px] md:text-[14px] font-bold uppercase">
                      {errors.message.message}
                    </li>
                  )}
                  {errors.altchaPayload && (
                    <li className="text-[12px] md:text-[14px] font-bold uppercase">
                      {errors.altchaPayload.message}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Name Field */}
            <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
              <Input
                type="text"
                {...register("name")}
                placeholder="NÉV"
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
                  {...register("email")}
                  placeholder="EMAIL"
                  disabled={isPending}
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
              <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
                <Input
                  type="tel"
                  {...register("phone")}
                  placeholder="Telefonszám"
                  disabled={isPending}
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
            </div>

            {/* Event Type Field */}
            <div className="bg-white rounded-[14px] md:rounded-[22px] shadow-lg overflow-hidden">
              <Textarea
                {...register("message")}
                placeholder="RENDEZVÉNY JELLEGE"
                disabled={isPending}
                className="h-[150px] md:h-[300px] text-[12px] md:text-[14px] px-3 md:px-6 py-3 md:py-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] resize-none font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Altcha Widget */}
            {isAltchaLoaded && (
              <div className="flex justify-center">
                <altcha-widget
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ref={altchaRef as any}
                  challengeurl="/api/altcha/challenge"
                  language="hu"
                  strings={JSON.stringify({
                    ariaLinkLabel: "Látogass el az Altcha.org oldalra",
                    enterCode: "Írd be a kódot",
                    enterCodeAria:
                      "Írd be a hallott kódot. Nyomd meg a Szóköz billentyűt a hang lejátszásához.",
                    error:
                      "A hitelesítés nem sikerült. Próbáld meg később újra.",
                    expired: "A hitelesítés lejárt. Próbáld újra.",
                    verificationRequired: "Ellenőrzés szükséges!",
                    getAudioChallenge: "Hangalapú kihívás kérése",
                    label: "Nem vagyok robot",
                    loading: "Betöltés...",
                    reload: "Újratöltés",
                    verify: "Ellenőrzés",
                    verified: "Ellenőrizve",
                    verifying: "Ellenőrzés folyamatban...",
                    waitAlert: "Ellenőrzés folyamatban... kérlek várj.",
                  })}
                  hidefooter
                  style={{
                    "--altcha-max-width": "100%",
                    "--altcha-color-base": "#ff1100",
                    "--altcha-color-text": "#ffffff",
                    "--altcha-color-footer-bg": "#ff1100",
                    "--altcha-border-width": "2px",
                    "--altcha-border-radius": "20px",
                    accentColor: "#ff1100",
                  }}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-end pt-2">
              <button
                type="submit"
                disabled={isPending || !isValid}
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
