// The partner logo wall. One list for the home page and the For venues page.
// Every file is a web-sized export from scripts/images.mjs.
import fordField from "@assets/web/logo-ford-field.webp";
import fourWinds from "@assets/web/logo-four-winds.webp";
import rocketClassic from "@assets/web/logo-rocket-classic.webp";
import afroFuture from "@assets/web/logo-afro-future.webp";
import fixins from "@assets/web/logo-fixins.webp";
import basementBurgerBar from "@assets/web/logo-basement-burger-bar.webp";

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: "Ford Field", logo: fordField },
  { name: "Four Winds Casinos", logo: fourWinds },
  { name: "Rocket Classic", logo: rocketClassic },
  { name: "Afro Future Detroit", logo: afroFuture },
  { name: "Fixins Soul Kitchen", logo: fixins },
  { name: "Basement Burger Bar", logo: basementBurgerBar },
  // Virgin Hotels Nashville and Henry Ford Health are live venues; their logos
  // join the wall once the owner confirms permission (web/logo-virgin-hotels.webp exists).
];
