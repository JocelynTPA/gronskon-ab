"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    {
      id: 'grasaklippning',
      title: 'Gräsklippning',
      description: 'Regelbunden gräsklippning för en välskött och vacker gräsmatta',
      longDescription: 'Vi erbjuder professionell gräsklippning anpassad efter säsong och väderförhållanden. Vårt team kommer regelbundet för att hålla din gräsmatta i perfekt skick året runt. Vi använder högkvalitativ utrustning och följer bästa praxis för gräsvård.',
      features: [
        'Regelbunden klippning under säsongen',
        'Anpassad frekvens efter väderförhållanden',
        'Professionell utrustning',
        'Kvalitetskontroll efter varje besök',
        'Flexibla avtal'
      ],
      image: '/images/lawn_mowing.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      id: 'tradbeskarning',
      title: 'Trädbeskärning',
      description: 'Professionell beskärning av träd och buskar för optimal hälsa',
      longDescription: 'Våra certifierade trädgårdsmästare utför säker och skicklig beskärning av träd och buskar. Vi följer bästa praxis för trädvård och säkerhet, och hjälper dina träd att växa hälsosamt och se vackra ut.',
      features: [
        'Säker beskärning enligt bästa praxis',
        'Hälsokontroll av träd och buskar',
        'Formbeskärning för estetik',
        'Säkerhetsbeskärning',
        'Certifierade trädgårdsmästare'
      ],
      image: '/images/tree_pruning.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      id: 'stenlaggning',
      title: 'Stenläggning',
      description: 'Skapa vackra gångar, terrasser och uppfarter med professionell stenläggning',
      longDescription: 'Vi specialiserar oss på högkvalitativ stenläggning som varar. Från små gångar till stora terrasser och uppfarter - vi använder bästa material och tekniker för att skapa funktionella och vackra ytor.',
      features: [
        'Högkvalitativ stenläggning',
        'Professionell grundläggning',
        'Drainage och vattenavledning',
        'Olika material och mönster',
        'Garanti på arbete'
      ],
      image: '/images/paving.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'snorojning',
      title: 'Snöröjning',
      description: 'Pålitlig snöröjning under vintersäsongen för säkra gångar',
      longDescription: 'Under vintersäsongen håller vi dina gångar och uppfarter rena och säkra. Vi erbjuder både regelbunden snöröjning och akut service vid snöstormar. Vårt team är redo dygnet runt när snön faller.',
      features: [
        'Regelbunden snöröjning',
        'Akut service vid snöstormar',
        'Saltning för isfri yta',
        '24/7 tillgänglighet',
        'Säkerhet först'
      ],
      image: '/images/snow_removal.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'tradgardsdesign',
      title: 'Trädgårdsdesign',
      description: 'Skapa din drömträdgård med vår expertis och kreativitet',
      longDescription: 'Vi hjälper dig att skapa trädgården av dina drömmar. Från första skissen till färdig trädgård - vi arbetar nära dig för att förstå dina önskemål och skapa en utemiljö som passar din livsstil och din fastighet.',
      features: [
        'Personlig designkonsultation',
        '3D-visualisering',
        'Komplett projektledning',
        'Hållbara lösningar',
        'Eftervård och underhåll'
      ],
      image: '/images/garden_design.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      id: 'underhall',
      title: 'Årligt underhåll',
      description: 'Komplett underhållsplan för din trädgård året runt',
      longDescription: 'Vi erbjuder kompletta underhållsplaner som tar hand om din trädgård året runt. Från vår till höst - vi ser till att din trädgård alltid ser perfekt ut och håller sig hälsosam.',
      features: [
        'Säsongsanpassat underhåll',
        'Regelbunden bevattning',
        'Gödning och näring',
        'Skadedjursbekämpning',
        'Kvalitetskontroll'
      ],
      image: '/images/anual_maintenance.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/WhatsApp Image 2025-08-13 at 11.00.08.jpeg"
                alt="Outdoor Ground Solutions AB"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-[#2D5A27]">
                Outdoor Ground Solutions AB
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Hem
              </Link>
              <Link href="/tjanster" className="text-[#2D5A27] font-semibold">
                Tjänster
              </Link>
              <Link href="/galleri" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Galleri
              </Link>
              <Link href="/om-oss" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Om oss
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#2D5A27] focus:outline-none focus:ring-2 focus:ring-[#2D5A27]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hem
                </Link>
                <Link
                  href="/tjanster"
                  className="block px-3 py-2 text-base font-medium text-[#2D5A27] bg-[#F8FAF5] rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tjänster
                </Link>
                <Link
                  href="/galleri"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galleri
                </Link>
                <Link
                  href="/om-oss"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Om oss
                </Link>
                <Link
                  href="/kontakt"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D5A27] to-[#4A7C59] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Din trädgård, vårt ansvar
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professionell trädgårdsservice i Skåne. Vi skapar och underhåller vackra utemiljöer för dig och din familj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-[#7FB069] hover:bg-[#6A9A5A] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Få kostnadsfritt offert
              </Link>
              <Link 
                href="/tjanster" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#2D5A27] font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Se våra tjänster
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-[#7FB069] rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-[#2D5A27] mb-4 font-serif">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-[#7FB069] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      href="/kontakt" 
                      className="bg-[#2D5A27] hover:bg-[#4A7C59] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Få offert för {service.title.toLowerCase()}
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Transparenta priser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder konkurrenskraftiga priser och transparenta avtal. Kontakta oss för en personlig offert anpassad efter dina behov.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">Enstaka besök</h3>
              <p className="text-gray-600 mb-6">
                Perfekt för engångsarbeten eller när du behöver hjälp med specifika uppgifter.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexibel bokning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent prissättning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kvalitetsgaranti
                </li>
              </ul>
            </div>

            <div className="bg-[#2D5A27] text-white rounded-lg p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#7FB069] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Populärast
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Årligt underhåll</h3>
              <p className="mb-6">
                Komplett underhållsplan för din trädgård med regelbundna besök året runt.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regelbundna besök
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Säsongsanpassad service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prioriterad kundservice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rabatterad prissättning
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">Projekt</h3>
              <p className="text-gray-600 mb-6">
                Större projekt som trädgårdsdesign, stenläggning eller komplett trädgårdsrenovering.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Komplett projektledning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detaljerad offert
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7FB069] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garanti på arbete
                </li>
              </ul>
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
            <Link 
              href="/kontakt" 
              className="bg-[#7FB069] hover:bg-[#6A9A5A] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Kontakta oss
            </Link>
            <a 
              href="tel:+46739390497" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2D5A27] font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Ring oss: 073-939 04 97
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