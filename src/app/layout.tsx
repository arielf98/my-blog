import "./globals.css";
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gig Engineering",
  description: "All About tech",
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={sen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
