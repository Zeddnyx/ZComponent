import Link from "next/link";

import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Footer from "@/components/ui/Footer";
import styles from "@/styles/component/layout.module.css";

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
          <Footer />
        </div>
      </div>
    </main>
  );
}
