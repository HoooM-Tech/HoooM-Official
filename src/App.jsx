import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Ecosystem } from "./components/sections/Ecosystem";
import { Why } from "./components/sections/Why";
import { Companies } from "./components/sections/Companies";
import { Stats } from "./components/sections/Stats";
import { Work } from "./components/sections/Work";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Insights } from "./components/sections/Insights";
import { CTABand } from "./components/sections/CTABand";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { WAFab } from "./components/layout/WAFab";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Ecosystem />
        <Why />
        <Companies />
        <Stats />
        <Work />
        <Testimonials />
        <FAQ />
        <Insights />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WAFab />
    </>
  );
}
