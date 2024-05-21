import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/component/sidebar.module.css";
import "@/styles/component/nav.module.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
