import {
  Cinzel,
  Pirata_One,
  Marcellus,
  Julius_Sans_One,
  Italiana,
  IM_Fell_English,
  Cormorant_Garamond,
  Uncial_Antiqua,
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

const cormorant = Cormorant_Garamond({
  variable: "--font-resonant",
  subsets: ["latin"],
  weight: "400",
});
const uncial = Uncial_Antiqua({
  variable: "--font-sangreal",
  subsets: ["latin"],
  weight: "400",
});

const fontVars = [
  cinzel.variable,
  cormorant.variable,
  uncial.variable,
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
  // The strongest signal browsers check before deciding to auto-dark-mode a
  // page that already implements its own theme — see the note in globals.css.
  other: { "color-scheme": "light dark" },
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
