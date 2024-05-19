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
    <main className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <MobileNav />
        </div>
          <div className="p-5 animate-fade-in h-svh overflow-y-auto custom-scrollbar">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
