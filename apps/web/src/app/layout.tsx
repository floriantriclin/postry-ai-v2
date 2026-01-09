import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "postry.ai | L'IA-Miroir",
  description: "Capturez votre voix unique pour LinkedIn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
