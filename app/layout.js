import {
  Cinzel,
  Pirata_One,
  Marcellus,
  Julius_Sans_One,
  Italiana,
  IM_Fell_English,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Site voice. Every class page keeps this for body copy. */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

/* One display face per class — used only for headings inside that class's
   pages, so each chapter sounds like itself. */
const pirata = Pirata_One({
  variable: "--font-deathknight",
  subsets: ["latin"],
  weight: "400",
});
const marcellus = Marcellus({
  variable: "--font-sovereign",
  subsets: ["latin"],
  weight: "400",
});
const julius = Julius_Sans_One({
  variable: "--font-mirrorwarden",
  subsets: ["latin"],
  weight: "400",
});
const italiana = Italiana({
  variable: "--font-devourer",
  subsets: ["latin"],
  weight: "400",
});
const imFell = IM_Fell_English({
  variable: "--font-fablekeeper",
  subsets: ["latin"],
  weight: "400",
});

const fontVars = [
  cinzel.variable,
  pirata.variable,
  marcellus.variable,
  julius.variable,
  italiana.variable,
  imFell.variable,
].join(" ");

export const metadata = {
  title: "Avara",
  description:
    "A homebrew D&D world: classes, compendium, lore, and character sheets for Avara.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVars}>
      <body>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
