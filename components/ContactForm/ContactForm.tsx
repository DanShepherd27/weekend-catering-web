import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <section
      id="contact-form"
      className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-white uppercase mb-8 md:mb-12">
            Ajánlatkérés
          </h2>

          <form className="space-y-4 md:space-y-6">
            {/* Name Field */}
            <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
              <Input
                type="text"
                placeholder="NÉV"
                className="h-[60px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="h-[60px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
              <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                <Input
                  type="tel"
                  placeholder="Telefonszám"
                  className="h-[60px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
            </div>

            {/* Event Type Field */}
            <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
              <Textarea
                placeholder="rendezvény jellege"
                className="h-[200px] md:h-[300px] text-[16px] md:text-[20px] px-6 md:px-12 py-6 md:py-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase resize-none font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end pt-4">
              <button
                type="submit"
                className="bg-white border-[#ff1100] border-2 rounded-[40px] md:rounded-[60px] shadow-lg px-8 md:px-16 py-4 md:py-6 hover:shadow-xl transition-shadow"
              >
                <p
                  className="text-[18px] md:text-[22px] font-bold text-[#ff1100] uppercase"
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                  }}
                >
                  Ajánlatkérés
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
