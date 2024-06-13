import Navbar from "../components/navbar";
import Footer from "../components/footer";

 
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tanvir Hossen Shanto",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link
  rel="icon"
  href="/logo.png"
  type="image/<generated>"
  sizes="any"
/></head>
      <body className={`${inter.className} font-UrbaneMedium `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
