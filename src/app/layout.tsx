import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outdoor Ground Solutions AB - Professionell trädgårdsservice i Skåne",
  description: "Outdoor Ground Solutions AB erbjuder professionell gräsklippning, trädbeskärning, stenläggning, snöröjning och trädgårdsdesign i Vellinge, Malmö, Höllviken och Trelleborg.",
  keywords: ["trädgårdsservice", "gräsklippning", "trädbeskärning", "stenläggning", "snöröjning", "Skåne"],
  authors: [{ name: "Outdoor Ground Solutions AB" }],
  openGraph: {
    title: "Outdoor Ground Solutions AB - Professionell trädgårdsservice i Skåne",
    description: "Professionell trädgårdsservice för ditt hem i Skåne. Gräsklippning, trädbeskärning, stenläggning och mer.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
