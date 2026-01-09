import type { Metadata } from "next";
import "../styles/globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
