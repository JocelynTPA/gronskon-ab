"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: 'Modern villa i Vellinge',
      category: 'Trädgårdsdesign',
      description: 'Komplett trädgårdsdesign med stenläggning, plantering och belysning.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (1).jpeg',
      location: 'Vellinge',
      features: ['Stenläggning', 'Plantering', 'Belysning', 'Design']
    },
    {
      id: 2,
      title: 'Stenläggning i Malmö',
      category: 'Stenläggning',
      description: 'Professionell stenläggning av uppfart och terrass.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (2).jpeg',
      location: 'Malmö',
      features: ['Uppfart', 'Terrass', 'Drainage', 'Kvalitet']
    },
    {
      id: 3,
      title: 'Trädbeskärning i Höllviken',
      category: 'Trädbeskärning',
      description: 'Säker och skicklig beskärning av stora träd.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (3).jpeg',
      location: 'Höllviken',
      features: ['Trädbeskärning', 'Säkerhet', 'Hälsa', 'Estetik']
    },
    {
      id: 4,
      title: 'Gräsklippning i Trelleborg',
      category: 'Gräsklippning',
      description: 'Regelbunden gräsklippning för välskött gräsmatta.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (4).jpeg',
      location: 'Trelleborg',
      features: ['Gräsklippning', 'Underhåll', 'Kvalitet', 'Regelbunden']
    },
    {
      id: 5,
      title: 'Snöröjning i Skåne',
      category: 'Snöröjning',
      description: 'Pålitlig snöröjning under vintersäsongen.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (5).jpeg',
      location: 'Skåne',
      features: ['Snöröjning', 'Saltning', '24/7', 'Säkerhet']
    },
    {
      id: 6,
      title: 'Komplett trädgårdsrenovering',
      category: 'Trädgårdsdesign',
      description: 'Total renovering av trädgård med ny design och plantering.',
      image: '/images/WhatsApp Image 2025-08-11 at 11.09.28 (6).jpeg',
      location: 'Vellinge',
      features: ['Renovering', 'Design', 'Plantering', 'Komplett']
    }
  ];

  const categories = ['Alla', 'Trädgårdsdesign', 'Stenläggning', 'Trädbeskärning', 'Underhåll', 'Snöröjning'];

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
              <Link href="/" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Hem
              </Link>
              <Link href="/tjanster" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Tjänster
              </Link>
              <Link href="/galleri" className="text-[#2D5A27] font-semibold">
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
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tjänster
                </Link>
                <Link
                  href="/galleri"
                  className="block px-3 py-2 text-base font-medium text-[#2D5A27] bg-[#F8FAF5] rounded-md"
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
      <section className="bg-gradient-to-br from-[#2D5A27] to-[#4A7C59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Vårt galleri
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Utforska våra slutförda projekt och se hur vi har förvandlat trädgårdar i hela Skåne. Från små förbättringar till kompletta transformationer.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white transition duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                {/* Project Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={`Före - ${project.title}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        FÖRE
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={`Efter - ${project.title}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        EFTER
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7FB069] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#2D5A27] mb-2">Arbete som utfördes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-[#F8FAF5] text-[#2D5A27] px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/kontakt"
                    className="inline-block bg-[#2D5A27] hover:bg-[#4A7C59] text-white font-semibold py-2 px-4 rounded transition duration-300"
                  >
                    Få liknande offert
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vad våra kunder säger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Läs vad våra nöjda kunder har att säga om vårt arbete och resultaten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAF5] rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Fantastiskt arbete med vår stenläggning! Resultatet översteg alla förväntningar. Mycket professionellt team.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#2D5A27]">Anna och Lars</p>
                <p className="text-gray-500 text-sm">Vellinge</p>
              </div>
            </div>

            <div className="bg-[#F8FAF5] rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;GrönSkön AB har förvandlat vår trädgård till en verklig oas. Högsta kvalitet och pålitlig service.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#2D5A27]">Karin Bergström</p>
                <p className="text-gray-500 text-sm">Malmö</p>
              </div>
            </div>

            <div className="bg-[#F8FAF5] rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                &ldquo;Bästa investeringen vi gjort! Vår trädgård ser fantastisk ut året runt tack vare deras underhåll.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#2D5A27]">Per och Eva</p>
                <p className="text-gray-500 text-sm">Höllviken</p>
              </div>
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