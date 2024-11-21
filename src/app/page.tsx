import HeroSection from "~/components/hero";
import ClientSection from "~/components/clients";
import ProjectSection from "~/components/projects";
import StrategySection from "~/components/strategy";
import NewsSection from "~/components/news";
import AboutSection from "~/components/about";
import ContactSection from "~/components/contact";
import NewsLetter from "~/components/newsletter";
import FooterSection from "~/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <ProjectSection />
      <StrategySection />
      <NewsSection />
      <AboutSection />
      <ContactSection />
      <NewsLetter />
      <FooterSection />
    </>
  );
}
