import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "StiftelseGuiden | Allt du behöver veta om svenska stiftelser",
  description: "Omfattande guide om att starta och driva stiftelser i Sverige. Information om juridiska krav, skattefrågor och förvaltning av stiftelser.",
  keywords: "stiftelse, starta stiftelse, svensk stiftelse, stiftelsebildning, stiftelsejuridik, skatt stiftelse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-primary-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
