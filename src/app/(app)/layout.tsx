import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seraxmi – Innovative Software Solutions",
  description:
    "Seraxmi is a cutting-edge software development company delivering tailored digital solutions including web development, mobile apps, UI/UX design, cybersecurity, and desktop applications. We empower businesses with scalable, secure, and user-friendly technology built by experts.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}