import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programa de Ingeniería Electromecanica - UFPS - Cúcuta",
  description: "Sitio web del programa de Ingeniería Electromecanica de la UFPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popinsFont.className}>{children}</body>
    </html>
  );
}
