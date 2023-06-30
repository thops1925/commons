import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thopz",
  description: "Share your project perhaps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
