import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import { logo } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <MobileNav />
        </div>
        {children}
      </div>
    </main>
  );
}
