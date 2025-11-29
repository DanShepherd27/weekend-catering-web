import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <section id="contact-form" className="w-full py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#ff1100] rounded-[20px] md:rounded-[37px] shadow-lg overflow-hidden p-3 md:p-6 lg:p-8">
          <h2 className="text-[16px] md:text-[20px] font-bold text-white uppercase mb-4 md:mb-6">
            Ajánlatkérés
          </h2>

          <form className="space-y-2 md:space-y-3">
            {/* Name Field */}
            <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
              <Input
                type="text"
                placeholder="NÉV"
                className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
                <Input
                  type="email"
                  placeholder="EMAIL"
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
              <div className="bg-white rounded-[20px] md:rounded-[30px] shadow-lg overflow-hidden">
                <Input
                  type="tel"
                  placeholder="Telefonszám"
                  className="h-[30px] md:h-[40px] text-[12px] md:text-[14px] px-3 md:px-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>
            </div>

            {/* Event Type Field */}
            <div className="bg-white rounded-[14px] md:rounded-[22px] shadow-lg overflow-hidden">
              <Textarea
                placeholder="rendezvény jellege"
                className="h-[150px] md:h-[300px] text-[12px] md:text-[14px] px-3 md:px-6 py-3 md:py-6 rounded-[20px] md:rounded-[30px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase resize-none font-normal"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-end pt-2">
              <button
                type="submit"
                className="bg-white border-[#ff1100] border-2 rounded-[20px] md:rounded-[30px] shadow-lg px-4 md:px-8 py-2 md:py-3 hover:shadow-xl transition-shadow"
              >
                <p
                  className="text-[14px] md:text-[16px] font-bold text-[#ff1100] uppercase"
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
