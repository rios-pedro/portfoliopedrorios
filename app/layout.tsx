import InitScroll from "@/components/scroll/InitScroll";
import "../public/css/styles.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const TITLE = "Pedro Rios — Desenvolvedor Backend Java";
const DESCRIPTION =
  "Desenvolvedor Backend Java júnior em Brasília. APIs REST com Spring Boot, PostgreSQL e Docker, e o app macOS Pomi em Tauri + Rust.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Desenvolvedor Backend Java",
    "Desenvolvedor Java Júnior",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "API REST",
    "Brasília",
  ],
  authors: [{ name: "Pedro Rios", url: SITE_URL }],
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Pedro Rios",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/img/pedro/og.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/img/pedro/og.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Henrique Rodrigues dos Santos",
  alternateName: "Pedro Rios",
  jobTitle: "Desenvolvedor Backend Java",
  url: SITE_URL,
  image: `${SITE_URL}/img/pedro/perfil.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Brasília", addressRegion: "DF", addressCountry: "BR" },
  sameAs: [
    "https://www.linkedin.com/in/pedro-rios-developer/",
    "https://github.com/rios-pedro",
  ],
  knowsAbout: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "REST APIs", "React", "TypeScript"],
};

const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'dark';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      color-scheme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <LenisSmoothScroll />
        <ScrollTop />
        <InitScroll />
      </body>
    </html>
  );
}
