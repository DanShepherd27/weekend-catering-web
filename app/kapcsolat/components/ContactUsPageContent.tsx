import { ContactForm } from "@/components/ContactForm/ContactForm";

export function ContactUsPageContent() {
  return (
    <main
      className="min-h-screen bg-white pb-[200px]"
      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
    >
      <ContactForm />
    </main>
  );
}
