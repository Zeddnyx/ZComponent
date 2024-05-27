import type { Metadata } from "next";
import {  DM_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/component/sidebar.module.css";
import "@/styles/component/nav.module.css";

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--mono-font",
});

export const metadata: Metadata = {
  title: "ZComponent",
  description: "Component library for React with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${mono.className}`}>{children}</body>
    </html>
  );
}
