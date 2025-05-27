import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

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
      <body className="antialiased">
        <div className="h-full p-2">
          <div className="fixed top-0 left-0 right-0 z-50 px-2 pt-2 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:z-50 lg:px-0 lg:pt-0">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
