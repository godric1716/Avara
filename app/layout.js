import {
  Cinzel,
  Pirata_One,
  Marcellus,
  Julius_Sans_One,
  Italiana,
  IM_Fell_English,
  Cormorant_Garamond,
  Uncial_Antiqua,
  Metamorphous,
  Russo_One,
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
/* Rough-carved rather than calligraphic — the one face here that reads as cut
   into something instead of written on it. */
const metamorphous = Metamorphous({
  variable: "--font-unbroken",
  subsets: ["latin"],
  weight: "400",
});
/* The one face on the site that isn't a serif or a blackletter. A superhero
   class earns a bold geometric sans — it should look like it wandered in
   from a different genre, because it did. */
const russo = Russo_One({
  variable: "--font-paragon",
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
  metamorphous.variable,
  russo.variable,
].join(" ");

export const metadata = {
  title: "Avara",
  description:
    "A homebrew D&D world: classes, compendium, lore, and character sheets for Avara.",
  // The strongest signal browsers check before deciding to auto-dark-mode a
  // page that already implements its own theme — see the note in globals.css.
  other: { "color-scheme": "dark light" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Applies a stored light preference before first paint. Without this
            a light-theme visitor gets a dark flash on every navigation.
            Deliberately not reading prefers-color-scheme: dark is the
            intended default regardless of the device setting. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('avara-theme');if(t==='light'){document.documentElement.dataset.theme='light';document.documentElement.style.colorScheme='light'}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
