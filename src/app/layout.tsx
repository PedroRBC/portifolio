import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { docsConfig } from "@/config/docs";

import { Inter } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: docsConfig.siteName,
    template: "%s | " + docsConfig.siteName,
  },
  description: docsConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased text-foreground flex flex-col",
          inter.className,
        )}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
