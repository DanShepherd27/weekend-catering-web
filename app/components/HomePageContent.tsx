"use client";

import { ContactForm } from "@/components/ContactForm/ContactForm";
import { MenuItem } from "@/components/MenuItem/MenuItem";
import Image from "next/image";
import Link from "next/link";

export default function HomePageContent() {
  return (
    <main
      className="min-h-screen bg-white pb-[200px]"
      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
    >
      {/* Party Types Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white text-center">
            <h2
              className="text-[24px] md:text-[32px] font-bold uppercase mb-4 md:mb-6 leading-tight"
              style={{ textShadow: "0px 4px 4px rgba(123,8,0,0.25)" }}
            >
              Esküvő, Kerti Party, Családi vagy céges rendezvény?
            </h2>
            <p className="text-[16px] md:text-[20px] font-bold uppercase leading-relaxed">
              Bármi, amire úgy érzed, hogy szeretnél egy jó BBQ-t,
              <br />
              Smash Burger-t, ezekben mind a segítségedre leszünk!
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Smash Burger */}
            <MenuItem name="Smash Burger" imageUrl="/burger.jpg" />

            {/* Pulled Pork */}
            <MenuItem name="Pulled Pork" imageUrl="/pulled-pork.jpg" />

            {/* BBQ */}
            <MenuItem name="BBQ" imageUrl="/bbq.jpg" />

            {/* Desszertek */}
            <MenuItem name="Desszertek" imageUrl="/desserts.jpg" />

            {/* Csomagajánlatok */}
            <MenuItem name="Csomagajánlatok" />

            {/* Luxury ajánlatkérés cégeknek */}
            <MenuItem name="Luxury ajánlatkérés cégeknek" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-6 md:mb-8">
              hogy miért válassz minket?
            </h2>
            <div className="text-[14px] md:text-[18px] font-bold uppercase space-y-2 leading-relaxed">
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
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-4 md:mb-6">
              ÜDÍTŐK
            </h2>
            <div className="text-[14px] md:text-[18px] font-bold uppercase leading-relaxed space-y-1">
              <p>
                Szeretjük a trendi megoldásokat, ezért üveges üdítőitalok
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
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-4 md:mb-6">
              Koktélok
            </h2>
            <div className="text-[14px] md:text-[18px] font-bold uppercase leading-relaxed space-y-1">
              <p>
                A Koktélbár mint olyan, elkerülhetetlen egy igazán jó
                hangulathoz,
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
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-6 md:mb-8">
              Tedd önazonossá rendezvényed!
            </h2>
            <div className="text-[14px] md:text-[18px] font-bold uppercase leading-relaxed space-y-2">
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
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative min-h-[300px]">
            <div className="p-6 md:p-12 lg:p-16 text-white relative z-10 md:w-2/3">
              <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-6 md:mb-8">
                RÓLUNK
              </h2>
              <div className="text-[14px] md:text-[18px] font-bold uppercase leading-relaxed space-y-2">
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
            <div className="absolute right-[-80px] top-0 w-[60%] h-full overflow-hidden">
              <Image
                src="/about.jpg"
                alt="About"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/galeria"
            className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
            }}
          >
            <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative h-[200px]">
              <div className="absolute left-0 top-[-20px] md:top-[-64px] w-[250px] md:w-[400px] h-[250px] md:h-[388px] opacity-80">
                <Image
                  src="/gallery2.jpg"
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay - tilted 30 degrees to blend with red background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(60deg, transparent 40%, #ff1100 80%)",
                  }}
                />
              </div>
              <div className="absolute right-0 top-[-30px] md:top-[-80px] w-[300px] md:w-[500px] h-[280px] md:h-[400px] opacity-80">
                <Image
                  src="/gallery1.jpg"
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay - tilted 270 degrees to blend with red background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(270deg, transparent 40%, #ff1100 80%)",
                  }}
                />
              </div>
              <h2 className="absolute inset-0 flex items-center justify-center text-[32px] md:text-[54px] lg:text-[36px] font-bold text-white uppercase z-10">
                Galéria
              </h2>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}
