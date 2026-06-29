import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const adelleLogo = localFont({
  src: "./fonts/AdelleMonoFlexItalic.ttf",
  variable: "--font-logo",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.icelinerefrigeracao.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IceLine Refrigeração | Manutenção e instalação premium",
    template: "%s | IceLine Refrigeração"
  },
  description: "Refrigeração comercial, eletrodomésticos, diagnóstico técnico e manutenção preventiva em Campo Grande e região.",
  applicationName: "IceLine Refrigeração",
  keywords: ["refrigeração", "câmara fria", "eletrodomésticos", "manutenção", "Campo Grande", "IceLine"],
  authors: [{ name: "IceLine Refrigeração" }],
  creator: "IceLine Refrigeração",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "IceLine Refrigeração",
    title: "IceLine Refrigeração | Atendimento técnico premium",
    description: "Instalação, manutenção e diagnóstico para sistemas de refrigeração e eletrodomésticos.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "IceLine Refrigeração" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IceLine Refrigeração",
    description: "Refrigeração e eletrodomésticos com padrão premium.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: siteUrl }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IceLine Refrigeração",
  description: "Serviços de refrigeração comercial, eletrodomésticos e manutenção preventiva.",
  url: siteUrl,
  telephone: "+55 67 99243-4488",
  image: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campo Grande",
    addressRegion: "MS",
    addressCountry: "BR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.441043554425452,
    longitude: -54.597355024845285
  },
  areaServed: "Campo Grande e região",
  priceRange: "$$"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${adelleLogo.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        {children}
      </body>
    </html>
  );
}