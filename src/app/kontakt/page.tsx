import Image from "next/image";
import Link from 'next/link';

export const metadata = {
  title: "Outdoor Ground Solutions AB - Professionell trädgårdsservice i Skåne",
  description: "Outdoor Ground Solutions AB erbjuder professionell gräsklippning, trädbeskärning, stenläggning, snöröjning och trädgårdsdesign i Vellinge, Malmö, Höllviken och Trelleborg.",
  keywords: ["trädgårdsservice", "gräsklippning", "trädbeskärning", "stenläggning", "snöröjning", "Skåne"],
  authors: [{ name: "Outdoor Ground Solutions AB" }],
  openGraph: {
    title: "Outdoor Ground Solutions AB - Professionell trädgårdsservice i Skåne",
    description: "Outdoor Ground Solutions AB erbjuder professionell gräsklippning, trädbeskärning, stenläggning, snöröjning och trädgårdsdesign i Vellinge, Malmö, Höllviken och Trelleborg.",
    keywords: ["trädgårdsservice", "gräsklippning", "trädbeskärning", "stenläggning", "snöröjning", "Skåne"],
    authors: [{ name: "Outdoor Ground Solutions AB" }],
    images: [{ url: "/logo.png" }],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Outdoor Ground Solutions AB Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="text-2xl font-bold text-[#2D5A27] font-serif">
                Outdoor Ground Solutions AB
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:text-[#2D5A27] px-3 py-2 rounded-md text-sm font-medium">
                  Hem
                </Link>
                <Link href="/tjanster" className="text-gray-700 hover:text-[#2D5A27] px-3 py-2 rounded-md text-sm font-medium">
                  Tjänster
                </Link>
                <Link href="/om-oss" className="text-gray-700 hover:text-[#2D5A27] px-3 py-2 rounded-md text-sm font-medium">
                  Om oss
                </Link>
                <Link href="/galleri" className="text-gray-700 hover:text-[#2D5A27] px-3 py-2 rounded-md text-sm font-medium">
                  Galleri
                </Link>
                <Link href="/kontakt" className="text-[#2D5A27] hover:text-[#4A7C59] px-3 py-2 rounded-md text-sm font-medium">
                  Kontakt
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-[#2D5A27]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D5A27] to-[#4A7C59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Kontakta oss
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Redo att förvandla din trädgård? Kontakta oss idag för en kostnadsfri konsultation och personlig offert.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D5A27] mb-6 font-serif">
                Få kostnadsfritt offert
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fyll i formuläret nedan så kontaktar vi dig inom 24 timmar för en personlig konsultation.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Förnamn *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                      placeholder="Ditt förnamn"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Efternamn *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                      placeholder="Ditt efternamn"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                    placeholder="din.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                    placeholder="073-939 04 97"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Adress *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                    placeholder="Din adress"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Tjänst du är intresserad av *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                  >
                    <option value="">Välj tjänst</option>
                    <option value="grasaklippning">Gräsklippning</option>
                    <option value="tradbeskarning">Trädbeskärning</option>
                    <option value="stenlaggning">Stenläggning</option>
                    <option value="snorojning">Snöröjning</option>
                    <option value="tradgardsdesign">Trädgårdsdesign</option>
                    <option value="arligt-underhall">Årligt underhåll</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-transparent"
                    placeholder="Beskriv dina önskemål eller frågor..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#2D5A27] hover:bg-[#4A7C59] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D5A27] mb-6 font-serif">
                Kontaktinformation
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#7FB069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D5A27]">Telefon</h3>
                    <a href="tel:+46739390497" className="text-gray-700 hover:text-[#2D5A27]">
                      073-939 04 97
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#7FB069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D5A27]">E-post</h3>
                    <a href="mailto:david@outdoorgroundsolutions.se" className="text-gray-700 hover:text-[#2D5A27]">
                      david@outdoorgroundsolutions.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#7FB069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D5A27]">Adress</h3>
                    <p className="text-gray-700">
                      Kantatgatan 19 Lgh 1002<br />
                      215 70 Malmö
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#7FB069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D5A27]">Öppettider</h3>
                    <p className="text-gray-700">
                      Måndag - Fredag: 07:00 - 17:00<br />
                      Lördag: 08:00 - 15:00<br />
                      Söndag: Stängt
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F8FAF5] rounded-lg">
                <h3 className="text-xl font-semibold text-[#2D5A27] mb-4">Företagsinformation</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Företagsnamn:</strong> Outdoor Ground Solutions AB</p>
                  <p><strong>Organisationsnummer:</strong> 559522-6225</p>
                  <p><strong>Adress:</strong> Kantatgatan 19 Lgh 1002, 215 70 Malmö</p>
                  <p><strong>Telefon:</strong> 073-939 04 97</p>
                  <p><strong>E-post:</strong> david@outdoorgroundsolutions.se</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vanliga frågor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Svar på de vanligaste frågorna om våra tjänster och processer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Hur snabbt får jag svar på min förfrågan?</h3>
              <p className="text-gray-600">
                Vi svarar normalt inom 24 timmar på alla förfrågningar. Under högsäsong kan det ta upp till 48 timmar.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Är offerten kostnadsfri?</h3>
              <p className="text-gray-600">
                Ja, alla offerter är helt kostnadsfria. Vi kommer ut för en konsultation utan några förpliktelser från din sida.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Vilka betalningsmetoder accepterar ni?</h3>
              <p className="text-gray-600">
                Vi accepterar faktura, Swish och banköverföring. Fakturor betalas normalt inom 30 dagar.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Har ni försäkring?</h3>
              <p className="text-gray-600">
                Ja, vi har full försäkring som täcker både vårt arbete och eventuella skador under utförandet.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Kan ni hjälpa mig med snöröjning under vintern?</h3>
              <p className="text-gray-600">
                Absolut! Vi erbjuder både regelbunden snöröjning och akut service vid snöstormar.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2D5A27] mb-3">Vad händer om jag inte är nöjd med arbetet?</h3>
              <p className="text-gray-600">
                Vi garanterar vårt arbete och kommer att åtgärda eventuella problem tills du är helt nöjd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vårt serviceområde
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi betjänar hela Skåne med fokus på Vellinge, Malmö, Höllviken och Trelleborg.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">Interaktiv karta kommer här</p>
              <p className="text-sm text-gray-500">Vellinge • Malmö • Höllviken • Trelleborg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2D5A27] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Redo att förvandla din trädgård?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för ett kostnadsfritt besök och offert. Vi hjälper dig att skapa trädgården av dina drömmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+46739390497" 
              className="bg-[#7FB069] hover:bg-[#6A9A5A] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Ring oss nu: 073-939 04 97
            </a>
            <a 
              href="mailto:david@outdoorgroundsolutions.se"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2D5A27] font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Skicka e-post
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#7FB069] mb-4 font-serif">Outdoor Ground Solutions AB</h3>
              <p className="text-gray-300">
                Professionell trädgårdsservice i Skåne. Vi skapar vackra utemiljöer för dig och din familj.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Gräsklippning</li>
                <li>Trädbeskärning</li>
                <li>Stenläggning</li>
                <li>Snöröjning</li>
                <li>Trädgårdsdesign</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Områden</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Vellinge</li>
                <li>Malmö</li>
                <li>Höllviken</li>
                <li>Trelleborg</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-300">
                <p>073-939 04 97</p>
                <p>david@outdoorgroundsolutions.se</p>
                <p>Org.nr: 559522-6225</p>
                <p>Kantatgatan 19 Lgh 1002</p>
                <p>215 70 Malmö</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Outdoor Ground Solutions AB. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 