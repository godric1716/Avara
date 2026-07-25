import { Cinzel } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export const metadata = {
  title: "Avara",
  description: "A homebrew D&D world: classes, compendium, lore, and character sheets for Avara.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
