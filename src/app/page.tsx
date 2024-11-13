import HeroSection from "~/src/components/hero/hero-section";
import ClientSection from "~/src/components/clients/client-section";
import ProjectSection from "../components/projects/projects-section";
import StrategySection from "../components/strategy/strategy-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ClientSection />
      <ProjectSection />
      <StrategySection />
    </main>
  );
}
