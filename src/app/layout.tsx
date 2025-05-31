import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/animations/PageTransition";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tushar's Portfolio",
  icons: {
    icon: "/Tushar_favicon.png",
  },
  description: "Tushar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="antialiased"><PageTransition>{children}</PageTransition></body>
    </html>
  );
}
