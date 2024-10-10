
import { HeroSection } from "./sections/hero-section";
import { BenefitsSection } from "./sections/benefits-section";
import { Footer } from "@/components/app/footer";
import { HowItWorksSection } from "./sections/how-it-works-section";

export default function LandingPage() {
  return (
    <main className="size-full min-h-screen relative">
      <div className="bg-[url(/home-background.png)] bg-cover h-screen w-screen absolute inset-0 -z-10 pointer-events-none">
        <div className="bg-gradient-to-t size-full from-background to-background/0 to-30%"></div>
      </div>

      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />

      <Footer />
    </main>
  );
}
