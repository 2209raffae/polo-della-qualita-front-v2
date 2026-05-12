import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polo della Qualità | L'Eccellenza ha un nuovo indirizzo",
  description: "Il Polo della Qualità: distretti, eventi e mappe dell'eccellenza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-polo-dark text-polo-light min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
