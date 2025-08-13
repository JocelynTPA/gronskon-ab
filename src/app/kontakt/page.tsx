"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
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
              <Link href="/tjanster" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Tjänster
              </Link>
              <Link href="/galleri" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Galleri
              </Link>
              <Link href="/om-oss" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Om oss
              </Link>
              <Link href="/kontakt" className="text-[#2D5A27] font-semibold">
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
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
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
                  className="block px-3 py-2 text-base font-medium text-[#2D5A27] bg-[#F8FAF5] rounded-md"
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
      <section className="bg-gradient-to-br from-[#2D5A27] to-[#4A7C59] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Kontakta oss
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Behöver du hjälp med din trädgård? Kontakta oss för en kostnadsfri konsultation och offert.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D5A27] mb-6 font-serif">
                Skicka meddelande
              </h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
                    placeholder="din.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
                    placeholder="073-939 04 97"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Tjänst
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
                  >
                    <option value="">Välj tjänst</option>
                    <option value="graslippning">Gräsklippning</option>
                    <option value="tradbeskarning">Trädbeskärning</option>
                    <option value="stenlaggning">Stenläggning</option>
                    <option value="snorojning">Snöröjning</option>
                    <option value="tradgardsdesign">Trädgårdsdesign</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
                    placeholder="Beskriv vad du behöver hjälp med..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D5A27] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1E3D1A] transition-colors duration-200"
                >
                  Skicka meddelande
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
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

      {/* CTA Section */}
      <section className="bg-[#F8FAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2D5A27] mb-6 font-serif">
            Redo att komma igång?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och få din trädgård i toppskick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+46739390497"
              className="bg-[#2D5A27] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3D1A] transition-colors duration-200"
            >
              Ring oss
            </a>
            <a
              href="mailto:david@outdoorgroundsolutions.se"
              className="border-2 border-[#2D5A27] text-[#2D5A27] px-8 py-3 rounded-lg font-semibold hover:bg-[#2D5A27] hover:text-white transition-colors duration-200"
            >
              Skicka e-post
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D5A27] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">
                  Outdoor Ground Solutions AB
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Professionell trädgårdsservice i Vellinge, Malmö, Höllviken och Trelleborg. Vi skapar vackra utemiljöer som varar.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>073-939 04 97</p>
                <p>david@outdoorgroundsolutions.se</p>
                <p>Org.nr: 559522-6225</p>
                <p>Kantatgatan 19 Lgh 1002</p>
                <p>215 70 Malmö</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Gräsklippning</Link></li>
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Trädbeskärning</Link></li>
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Stenläggning</Link></li>
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Snöröjning</Link></li>
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Trädgårdsdesign</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sidor</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Hem</Link></li>
                <li><Link href="/tjanster" className="hover:text-white transition-colors">Tjänster</Link></li>
                <li><Link href="/galleri" className="hover:text-white transition-colors">Galleri</Link></li>
                <li><Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Outdoor Ground Solutions AB. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 