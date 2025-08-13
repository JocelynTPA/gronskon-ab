"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const team = [
    {
      name: 'Erik Andersson',
      role: 'VD & Trädgårdsmästare',
      description: 'Erik har över 15 års erfarenhet inom trädgårdsbranschen och grundade GrönSkön AB 2014. Han är certifierad trädgårdsmästare med specialisering inom trädbeskärning och trädgårdsdesign.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Maria Lindberg',
      role: 'Trädgårdsdesigner',
      description: 'Maria är vår kreativa kraft bakom många av våra vackraste trädgårdsprojekt. Hon har en bakgrund inom landskapsarkitektur och passion för hållbara lösningar.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Johan Nilsson',
      role: 'Senior Trädgårdsmästare',
      description: 'Johan är vår expert på stenläggning och hårda material. Med över 10 års erfarenhet säkerställer han att varje projekt håller högsta kvalitet.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const values = [
    {
      title: 'Kvalitet',
      description: 'Vi levererar alltid högsta kvalitet i allt vi gör, från det minsta underhållsarbetet till de största designprojekten.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Hållbarhet',
      description: 'Vi arbetar med hållbara metoder och material för att skapa trädgårdar som är vackra både nu och för framtida generationer.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Pålitlighet',
      description: 'Våra kunder kan lita på att vi kommer när vi säger och levererar vad vi lovar, varje gång.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Passion',
      description: 'Vi älskar vad vi gör och det syns i varje trädgård vi skapar. Vår passion för naturen driver oss att leverera det bästa.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: 'Anna och Lars Johansson',
      location: 'Vellinge',
      text: 'Outdoor Ground Solutions AB har förvandlat vår trädgård till en verklig oas. Erik och hans team är professionella, pålitliga och verkligen kunniga. Vi rekommenderar dem varmt!',
      rating: 5
    },
    {
      name: 'Karin Bergström',
      location: 'Malmö',
      text: 'Fantastiskt arbete med vår stenläggning! Johan och teamet var punktliga, noggranna och skapade exakt vad vi hade hoppats på. Mycket nöjda kunder.',
      rating: 5
    },
    {
      name: 'Per och Eva Nilsson',
      location: 'Höllviken',
      text: 'Vi har använt Outdoor Ground Solutions AB för årligt underhåll i tre år nu. De är alltid pålitliga och vår trädgård ser fantastisk ut året runt. Bästa investeringen vi gjort!',
      rating: 5
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
              <Link href="/tjanster" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Tjänster
              </Link>
              <Link href="/galleri" className="text-gray-700 hover:text-[#2D5A27] transition-colors">
                Galleri
              </Link>
              <Link href="/om-oss" className="text-[#2D5A27] font-semibold">
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
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#2D5A27] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galleri
                </Link>
                <Link
                  href="/om-oss"
                  className="block px-3 py-2 text-base font-medium text-[#2D5A27] bg-[#F8FAF5] rounded-md"
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
            Om Outdoor Ground Solutions AB
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Vi är passionerade för att skapa vackra och hållbara trädgårdar i Skåne. Läs mer om vårt team, våra värderingar och vår historia.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-6 font-serif">
                Vår historia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Outdoor Ground Solutions AB grundades 2014 av Erik Andersson, en passionerad trädgårdsmästare med visionen att skapa vackra och hållbara trädgårdar i Skåne. Från enmansföretag har vi vuxit till ett team av erfarna professionella som delar samma passion för kvalitet och kundnöjdhet.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Under åren har vi hjälpt hundratals familjer att förverkliga sina drömmar om den perfekta trädgården. Vi är stolta över att ha byggt upp ett rykte för kvalitet, pålitlighet och kundnöjdhet i hela Skåne.
              </p>
              <p className="text-lg text-gray-600">
                Idag betjänar vi områden från Vellinge till Trelleborg och fortsätter att växa med våra kunder. Vårt mål är att vara Skånes främsta trädgårdsföretag genom att kombinera traditionell trädgårdskunskap med moderna tekniker och hållbara lösningar.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about.jpg"
                alt="Outdoor Ground Solutions AB team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Våra värderingar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dessa fyra värderingar guidar allt vi gör och är grunden för vårt framgångsrika företag.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7FB069] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2D5A27] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vårt team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Möt de erfarna professionella som gör Outdoor Ground Solutions AB till Skånes främsta trädgårdsföretag.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#2D5A27] mb-2">{member.name}</h3>
                <p className="text-[#7FB069] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2D5A27] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Års erfarenhet</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Nöjda kunder</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Slutförda projekt</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-lg">Kundbetyg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4 font-serif">
              Vad våra kunder säger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Läs vad våra nöjda kunder har att säga om vårt arbete och service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#2D5A27]">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
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