import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZComponent | Input Tag",
  description: "Input Tag component with React with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
