"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
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
              <Link href="/" className="text-[#2D5A27] font-semibold">
                Hem
              </Link>
              <Link href="/tjanster" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
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
                  className="block px-3 py-2 text-base font-medium text-[#2D5A27] bg-[#F8FAF5] rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hem
                </Link>
                <Link
                  href="/tjanster"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tjänster
                </Link>
                <Link
                  href="/om-oss"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Om oss
                </Link>
                <Link
                  href="/galleri"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galleri
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

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Våra tjänster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder ett komplett utbud av trädgårdstjänster för att göra din trädgård vacker året runt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gräsklippning */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Gräsklippning</h3>
              <p className="text-gray-600">
                Regelbunden gräsklippning för en välskött och vacker gräsmatta. Vi anpassar frekvensen efter säsong och väderförhållanden.
              </p>
            </div>

            {/* Trädbeskärning */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Trädbeskärning</h3>
              <p className="text-gray-600">
                Professionell beskärning av träd och buskar för optimal hälsa, säkerhet och estetik. Vi följer bästa praxis för trädvård.
              </p>
            </div>

            {/* Stenläggning */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Stenläggning</h3>
              <p className="text-gray-600">
                Skapa vackra gångar, terrasser och uppfarter med professionell stenläggning. Vi använder högkvalitativa material som varar.
              </p>
            </div>

            {/* Snöröjning */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Snöröjning</h3>
              <p className="text-gray-600">
                Pålitlig snöröjning under vintersäsongen. Vi håller dina gångar och uppfarter rena och säkra även under snöstormar.
              </p>
            </div>

            {/* Trädgårdsdesign */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Trädgårdsdesign</h3>
              <p className="text-gray-600">
                Skapa din drömträdgård med vår expertis. Vi designar och bygger trädgårdar som passar din livsstil och din fastighet.
              </p>
            </div>

            {/* Underhåll */}
            <div className="bg-[#F8FAF5] rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-[#7FB069] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">Årligt underhåll</h3>
              <p className="text-gray-600">
                Komplett underhållsplan för din trädgård. Vi tar hand om allt från vår till höst för att din trädgård alltid ska se perfekt ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6 font-serif">
                Om Outdoor Ground Solutions AB
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Outdoor Ground Solutions AB grundades 2014 av Erik Andersson, en passionerad trädgårdsmästare med visionen att skapa vackra och hållbara trädgårdar i Skåne. Från enmansföretag har vi vuxit till ett team av erfarna professionella som delar samma passion för kvalitet och kundnöjdhet.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Vårt team av erfarna trädgårdsmästare är passionerade för att leverera högkvalitativ service. Vi förstår att varje trädgård är unik och anpassar våra lösningar efter dina specifika behov.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2D5A27]">10+</div>
                  <div className="text-gray-600">Års erfarenhet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2D5A27]">500+</div>
                  <div className="text-gray-600">Nöjda kunder</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  src="/images/outdoor.jpg"
                  alt="Professionell trädgårdsservice"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vi betjänar Skåne
            </h2>
            <p className="text-lg text-gray-600">
              Vi erbjuder våra tjänster i följande områden:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Vellinge', 'Malmö', 'Höllviken', 'Trelleborg'].map((city) => (
              <div key={city} className="text-center p-6 bg-[#F8FAF5] rounded-lg hover:bg-[#7FB069] hover:text-white transition duration-300">
                <h3 className="text-xl font-semibold">{city}</h3>
              </div>
            ))}
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
