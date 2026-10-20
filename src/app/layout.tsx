import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import Footer from "@/components/footer";
import Header from "@/components/header";

const archivo = Archivo({ subsets: ["latin"], display: "swap", variable: "--font-archivo" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Desenvolvedor`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Desenvolvedor`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#222623" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cn("flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased", archivo.variable, GeistMono.variable)}>
        <Providers>
          <a href="#main-content" className="fixed left-5 top-4 z-[100] -translate-y-24 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:translate-y-0">
            Pular para o conteúdo
          </a>
          <Header />
          <div id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
