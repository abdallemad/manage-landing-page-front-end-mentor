import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manage Landing Page | Abdalla Emad",
  description: " Manage Landing Page | Abdalla Emad",
  keywords: "Manage Landing Page, Frontend Mentor, Abdalla Emad",
  icons:{
    icon:"/images/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
