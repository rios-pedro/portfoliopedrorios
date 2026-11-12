import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolios from "@/components/sections/Portfolios";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header1 />
      <Logo />
      <ColorSwitcher />
      <main id="page-content" className="page-content">
        <Hero />
        <Portfolios />
        <About />
        <Services />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
