import type { Metadata } from "next";
import { Inter, Oswald, Rye } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/site";
import { brand } from "@/lib/brand";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rye",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.tagline}`,
  description: `Demo visual de ${brand.name}: ${brand.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${rye.variable} ${oswald.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
