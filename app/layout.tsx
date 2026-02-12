import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundación El Casco Rosa - Apoyo contra el cáncer de mama",
  description: "ONG dedicada al apoyo emocional, prevención y concientización sobre el cáncer de mama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
