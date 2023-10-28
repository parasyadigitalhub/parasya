import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Fixedicon from "@/components/Fixedicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parasya",
  description: "Elevating your identity",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Navbar />
          <Fixedicon />
          {children}
        </div>
      </body>
    </html>
  );
}
