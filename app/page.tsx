import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-primary/90 to-primary py-12 md:py-20 rounded-b-3xl md:rounded-b-[75px] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white uppercase mb-4 md:mb-8">
            Weekend Catering
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium">
            Street Food Catering Services
          </p>
        </div>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-primary/10 py-8 md:py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-primary uppercase mb-6 text-center">
            Keress Minket!
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase">
                  Telefon
                </p>
                <p className="text-lg md:text-xl font-semibold text-primary">
                  +36 70 394 8800
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase">
                  Email
                </p>
                <p className="text-lg md:text-xl font-semibold text-primary">
                  info@weekendcatering.hu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
              <Instagram className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase">
                  Instagram
                </p>
                <p className="text-lg md:text-xl font-semibold text-primary">
                  weekendcatering_BBQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12 text-white text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6">
              Esküvő, Kerti Party, Családi vagy Céges Rendezvény?
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed">
              Bármi amire úgy érzed, hogy szeretnél egy jó BBQ-t, Smash
              Burger-t, ezekben mind a segítségedre leszünk!
            </p>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Smash Burger */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-white uppercase text-center z-20">
                Smash Burger
              </h3>
            </div>

            {/* Pulled Pork */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-white uppercase text-center z-20">
                Pulled Pork
              </h3>
            </div>

            {/* BBQ */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-white uppercase text-center z-20">
                BBQ
              </h3>
            </div>

            {/* Desszertek */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-white uppercase text-center z-20">
                Desszertek
              </h3>
            </div>

            {/* Csomagajánlatok */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold text-white uppercase text-center z-20">
                Csomagajánlatok
              </h3>
            </div>

            {/* Üdítők */}
            <div className="group relative h-48 md:h-64 rounded-2xl md:rounded-[75px] overflow-hidden bg-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-white uppercase text-center z-20">
                Üdítők
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              Koktélok
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed">
              A Koktélbár mint olyan, elkerülhetetlen egy igazán jó hangulathoz.
              Bartender kollégánk előre egyeztetett koktélokkal és
              röviditalokkal készül.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              Hogy miért válassz minket?
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                Sok év elteltével esküvőztetésben dolgozva, sok-sok rendezvényt
                látva és lebonyolítva, tudom, hogy neked is széleskörű
                szolgáltatást tudunk nyújtani.
              </p>
              <p>Hiszünk a minőségben és abban, hogy a kevesebb néha több.</p>
              <p>
                Ezért nyújtunk olyan szolgáltatást, ahol fókuszáltan tudunk a
                rendezvényeteken, egy kifejezett Street Food ételt a lehető
                legmagasabb minőségben elkészíteni számotokra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              Rólunk
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                Vasvári Atty vagyok! Feleségemmel Vasvári Lidivel vágtunk bele
                ebbe a szuper világba, amit Catering-nek hívnak!
              </p>
              <p>
                A szívünkben mindig is benne volt az emberek szeretete és az
                ételek, italok iránti szenvedély!
              </p>
              <p>
                Hát arra jutottunk, hogy ötvözzük a kettőt, hiszen annál jobb
                érzés nincs, amikor az emberek arcán látjuk egy falat vagy korty
                után az örömöt és az elégedettségét.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              Tedd Önazonossá Rendezvényed!
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                Dedikált poharat szeretnél, amit neked gyártunk le? Erre is van
                lehetőséged. Miért jó? Mert tökéletes arra, hogy kifejezzétek
                önmagatokat és a rendezvény hangulatát.
              </p>
              <p>Ha pedig esküvőtök van, a köszönőajándék már meg is van.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary rounded-2xl md:rounded-[75px] p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-12 text-center">
              Ajánlatkérés
            </h2>

            <form className="space-y-6">
              {/* Name Field */}
              <Input
                type="text"
                placeholder="Név"
                className="h-16 md:h-20 text-lg rounded-2xl md:rounded-[75px] border-2 border-primary bg-white text-primary placeholder:text-primary/50"
              />

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-16 md:h-20 text-lg rounded-2xl md:rounded-[75px] border-2 border-primary bg-white text-primary placeholder:text-primary/50"
                />
                <Input
                  type="tel"
                  placeholder="Telefonszám"
                  className="h-16 md:h-20 text-lg rounded-2xl md:rounded-[75px] border-2 border-primary bg-white text-primary placeholder:text-primary/50"
                />
              </div>

              {/* Event Type Field */}
              <Textarea
                placeholder="Rendezvény jellege"
                className="min-h-32 md:min-h-48 text-lg rounded-2xl md:rounded-[75px] border-2 border-primary bg-white text-primary placeholder:text-primary/50 resize-none"
              />

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="h-16 md:h-20 px-12 md:px-16 text-lg md:text-xl font-bold rounded-2xl md:rounded-[75px] bg-white text-primary hover:bg-gray-100 uppercase"
                >
                  Ajánlatkérés
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary text-white py-12 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold mb-6">
            Weekend Catering - Street Food Catering Services
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <a
              href="tel:+36703948800"
              className="hover:opacity-80 transition-opacity"
            >
              +36 70 394 8800
            </a>
            <a
              href="mailto:info@weekendcatering.hu"
              className="hover:opacity-80 transition-opacity"
            >
              info@weekendcatering.hu
            </a>
            <a
              href="https://instagram.com/weekendcatering_bbq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              @weekendcatering_BBQ
            </a>
          </div>
          <p className="text-sm md:text-base text-white/70 mt-8">
            © 2024 Weekend Catering. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
