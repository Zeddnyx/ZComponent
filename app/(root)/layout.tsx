import Image from "next/image";
import Link from "next/link";

import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Footer from "@/components/ui/Footer";

import { logo } from "@/lib/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen max-w-7xl mx-auto overflow-hidden">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Link href="/">
            <h1 className="font-bold text-24">ZComponent</h1>
          </Link>
          <MobileNav />
        </div>
        <div className=" p-5 sm:p-10 h-svh w-full xl:w-[calc(90vw-500px)] animate-fade-in overflow-y-auto no-scrollbar animate-fade-in8">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
