import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Galleri - GrönSkön AB | Se våra slutförda trädgårdsprojekt',
  description: 'Utforska vårt galleri med slutförda trädgårdsprojekt i Skåne. Se transformationer från gräsklippning till komplett trädgårdsdesign.',
};

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern trädgård i Vellinge',
      description: 'Komplett trädgårdsrenovering med stenläggning, plantering och belysning. En modern oas för familjen att njuta av.',
      category: 'Trädgårdsdesign',
      location: 'Vellinge',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Stenläggning', 'Plantering', 'Belysning', 'Vattensystem']
    },
    {
      id: 2,
      title: 'Stenläggning i Malmö',
      description: 'Professionell stenläggning av uppfart och gångar. Hållbart och vackert material som varar i generationer.',
      category: 'Stenläggning',
      location: 'Malmö',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Uppfart', 'Gångar', 'Drainage', 'Kantsten']
    },
    {
      id: 3,
      title: 'Trädbeskärning i Höllviken',
      description: 'Säker och skicklig beskärning av stora träd för optimal hälsa och säkerhet. Resultatet blev en vacker och välskött trädgård.',
      category: 'Trädbeskärning',
      location: 'Höllviken',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Säkerhetsbeskärning', 'Formbeskärning', 'Hälsokontroll', 'Stubbfräsning']
    },
    {
      id: 4,
      title: 'Årligt underhåll i Trelleborg',
      description: 'Regelbunden gräsklippning och trädgårdsunderhåll för en perfekt trädgård året runt. Kundnöjdhet garanterad.',
      category: 'Underhåll',
      location: 'Trelleborg',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Gräsklippning', 'Trädbeskärning', 'Plantering', 'Kvalitetskontroll']
    },
    {
      id: 5,
      title: 'Terrassbyggnation i Vellinge',
      description: 'Stor terrass med högkvalitativ trä och professionell byggnation. Perfekt för sommarkvällar och underhållning.',
      category: 'Stenläggning',
      location: 'Vellinge',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Terrass', 'Belysning', 'Räcke', 'Trappor']
    },
    {
      id: 6,
      title: 'Snöröjning i Malmö',
      description: 'Pålitlig snöröjning under vintersäsongen. Vi håller gångar och uppfarter rena och säkra även under snöstormar.',
      category: 'Snöröjning',
      location: 'Malmö',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Snöröjning', 'Saltning', '24/7 service', 'Säkerhet']
    }
  ];

  const categories = ['Alla', 'Trädgårdsdesign', 'Stenläggning', 'Trädbeskärning', 'Underhåll', 'Snöröjning'];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#2D5A27] font-serif">
                GrönSkön AB
              </Link>
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
                <Link href="/galleri" className="text-[#2D5A27] hover:text-[#4A7C59] px-3 py-2 rounded-md text-sm font-medium">
                  Galleri
                </Link>
                <Link href="/kontakt" className="text-gray-700 hover:text-[#2D5A27] px-3 py-2 rounded-md text-sm font-medium">
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
                        src={project.beforeImage}
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
                        src={project.afterImage}
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
                "Fantastiskt arbete med vår stenläggning! Resultatet översteg alla förväntningar. Mycket professionellt team."
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
                "GrönSkön AB har förvandlat vår trädgård till en verklig oas. Högsta kvalitet och pålitlig service."
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
                "Bästa investeringen vi gjort! Vår trädgård ser fantastisk ut året runt tack vare deras underhåll."
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
            Vill du ha en liknande transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och låt oss hjälpa dig att skapa trädgården av dina drömmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="bg-[#7FB069] hover:bg-[#6A9A5A] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Få kostnadsfritt offert
            </Link>
            <a 
              href="tel:+46701234567" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2D5A27] font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Ring oss: 070-123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#7FB069] mb-4 font-serif">GrönSkön AB</h3>
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
                <p>070-123 45 67</p>
                <p>info@gronskon.se</p>
                <p>Org.nr: 556789-1234</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 GrönSkön AB. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 