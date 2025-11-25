import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white pb-[200px]"
      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
    >
      {/* Floating Ajánlatkérés Button */}
      <a
        href="#contact-form"
        className="fixed bottom-36 right-1 z-50 bg-white border-[#ff1100] border-2 rounded-full shadow-lg hover:shadow-xl transition-shadow px-8 py-4"
      >
        <p
          className="text-[20px] font-bold text-[#ff1100] uppercase"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
          }}
        >
          Ajánlatkérés
        </p>
      </a>

      {/* Party Types Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white text-center">
            <h2
              className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6 leading-tight"
              style={{ textShadow: "0px 4px 4px rgba(123,8,0,0.25)" }}
            >
              Esküvő, Kerti Party, Családi vagy céges rendezvény?
            </h2>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-bold uppercase leading-relaxed">
              Bármi amire úgy érzed, hogy szeretnél egy jó BBQ-t,
              <br />
              Smash Burger-t, ezekben mind a segítségedre leszünk!
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Smash Burger */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[#ff1100]" />
              <Image
                src="/burger.jpg"
                alt="Smash Burger"
                fill
                className="object-cover blur-[5px] opacity-90"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white uppercase z-10 px-4">
                Smash Burger
              </h3>
            </div>

            {/* Pulled Pork */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[#ff1100]" />
              <Image
                src="/pulled-pork.jpg"
                alt="Pulled Pork"
                fill
                className="object-cover blur-[5px] opacity-90"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white uppercase z-10 px-4">
                PULLED PORk
              </h3>
            </div>

            {/* BBQ */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[#ff1100]" />
              <Image
                src="/bbq.jpg"
                alt="BBQ"
                fill
                className="object-cover blur-[5px] opacity-90"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white uppercase z-10 px-4">
                BBQ
              </h3>
            </div>

            {/* Desszertek */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[#ff1100]" />
              <Image
                src="/desserts.jpg"
                alt="Desszertek"
                fill
                className="object-cover blur-[5px] opacity-90"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white uppercase text-center z-10 px-4">
                Desszertek
              </h3>
            </div>

            {/* Csomagajánlatok */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#ff1100] shadow-lg">
              <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white uppercase text-center px-4">
                Csomagajánlatok
              </h3>
            </div>

            {/* Luxory ajánlatkérés cégeknek */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#ff1100] shadow-lg">
              <h3 className="absolute inset-0 flex items-center justify-center text-[24px] md:text-[32px] lg:text-[42px] font-bold text-white uppercase text-center px-4 leading-tight">
                Luxory ajánlatkérés cégeknek
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-6 md:mb-8">
              hogy miért válassz minket?
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase space-y-2 leading-relaxed">
              <p>
                Sok év elteltével esküvőztetésben dolgozva, sok sok, rendezvényt
                látva
              </p>
              <p>
                és lebonyolítva, tudom, hogy neked is széleskörű szolgáltatást
                tudunk nyújtani.
              </p>
              <p>Hiszünk a minőségben és abban hogy a kevesebb néha több.</p>
              <p>
                Ezért nyújtunk olyan szolgáltatást, ahol fókuszáltan tudunk a
                rendezvényeteken,
              </p>
              <p>
                egy kifejezett Street Food ételt a lehető legmagasabb minőségben
              </p>
              <p>elkészíteni számotokra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Üdítők Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6">
              ÜDÍTŐK
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase leading-relaxed space-y-1">
              <p>
                Szeretjük a trendi megoldásokat, ezért üveges üditőitalok
                választékából
              </p>
              <p>
                válogathatsz, amely &quot;Sziszentsd És Vidd&quot; alapon
                működik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Koktélok Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6">
              KOKtélok
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase leading-relaxed space-y-1">
              <p>
                A Koktélbár mint olyan, elkerülhetetlen egy igazán jó
                hangulatoz,
              </p>
              <p>
                Bartender kollégánk előre egyeztetett koktélokkal és
                röviditalokkal készül.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-6 md:mb-8">
              Tedd önazonossá rendezvényed!
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase leading-relaxed space-y-2">
              <p>Dedikált poharat szeretnél, amit neked gyártunk le?</p>
              <p>
                Erre is van lehetőséged. Miért jó? Mert tökéletes arra hogy
                kifejezzétek
              </p>
              <p>önmagatokat és a rendezvény hangulatát.</p>
              <p>Ha pedig esküvőtök van, a köszönőajándék már meg is van.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative min-h-[300px] md:min-h-[400px]">
            <div className="p-6 md:p-12 lg:p-16 text-white relative z-10 md:w-2/3">
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-6 md:mb-8">
                RÓLUNK
              </h2>
              <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase leading-relaxed space-y-2">
                <p>
                  Vasvári Atty vagyok! Feleségemmel Vasvári Lidivel vágtunk
                  bele,
                </p>
                <p>ebbe a szuper világba amit Catering-nek hívnak!</p>
                <p>A szívünkben mindig is benne volt, az emberek szeretete,</p>
                <p>és az ételek, italok iránti szenvedély!</p>
                <p>Hát arra jutottunk, hogy ötvözzük a kettőt,</p>
                <p>hiszen annál jobb érzés nincs, amikor az emberek arcán</p>
                <p>látjuk egy falat vagy korty után,</p>
                <p>az örömöt és az elégedettségét.</p>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-[40%] h-full overflow-hidden hidden md:block">
              <Image
                src="/about.jpg"
                alt="About"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative h-[200px] md:h-[250px]">
            <div className="absolute left-0 top-[-20px] md:top-[-64px] w-[250px] md:w-[400px] h-[250px] md:h-[388px] opacity-80">
              <Image
                src="/gallery2.jpg"
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-[-30px] md:top-[-80px] w-[300px] md:w-[500px] h-[280px] md:h-[400px] opacity-80">
              <Image
                src="/gallery1.jpg"
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="absolute inset-0 flex items-center justify-center text-[32px] md:text-[54px] lg:text-[72px] font-bold text-white uppercase z-10">
              GAléria
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white uppercase mb-8 md:mb-12">
              Ajánlatkérés
            </h2>

            <form className="space-y-4 md:space-y-6">
              {/* Name Field */}
              <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                <Input
                  type="text"
                  placeholder="NÉV"
                  className="h-[60px] md:h-[80px] lg:h-[100px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                  style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                  <Input
                    type="email"
                    placeholder="EMAIL"
                    className="h-[60px] md:h-[80px] lg:h-[100px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                  />
                </div>
                <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                  <Input
                    type="tel"
                    placeholder="Telefonszám"
                    className="h-[60px] md:h-[80px] lg:h-[100px] text-[16px] md:text-[20px] px-6 md:px-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase font-normal"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
                  />
                </div>
              </div>

              {/* Event Type Field */}
              <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-lg overflow-hidden">
                <Textarea
                  placeholder="rendezvény jellege"
                  className="h-[200px] md:h-[300px] lg:h-[400px] text-[16px] md:text-[20px] px-6 md:px-12 py-6 md:py-12 rounded-[40px] md:rounded-[60px] border-0 bg-white text-[#ff1100] placeholder:text-[#ff1100] uppercase resize-none font-normal"
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
                    className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#ff1100] uppercase"
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

      {/* Sticky Contact Information Section at Bottom */}
      <section className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#ff1100] shadow-[0_-4px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6">
          <h2
            className="text-[20px] md:text-[28px] font-bold text-[#ff1100] uppercase mb-3 md:mb-4 text-center md:text-left"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
            }}
          >
            KERESS MINKET!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ff1100] flex-shrink-0" />
              <a
                href="tel:+36703948800"
                className="text-[14px] md:text-[18px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                +36703948800
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ff1100] flex-shrink-0" />
              <a
                href="mailto:info@weekendcatering.hu"
                className="text-[14px] md:text-[18px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                info@weekendcatering.hu
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
              />
              <a
                href="https://instagram.com/weekendcatering_bbq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] md:text-[18px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                weekendcatering_BBQ
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <p
                className="text-[14px] md:text-[18px] font-medium text-[#ff1100] uppercase"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                weekend catering
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
