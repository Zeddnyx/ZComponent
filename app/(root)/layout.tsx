import Link from "next/link";
import { Metadata } from "next";

import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Pagination from "@/components/ui/Pagination";
import Footer from "@/components/ui/Footer";
import styles from "@/styles/component/layout.module.css";

export const metadata: Metadata = {
  title: "ZComp | %s",
  description: "Component library for React with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <div>
          <Link href="/">
            <h1 className="font-bold text-24">ZComponent</h1>
          </Link>
          <MobileNav />
        </div>
        <div className="no-scrollbar ">
          {children}
          <Pagination />
          <Footer />
        </div>
      </div>
    </main>
  );
}
