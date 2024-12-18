import { HeroSection } from "./sections/hero-section";
import { BenefitsSection } from "./sections/benefits-section";
import { Footer } from "@/components/app/footer";
import { HowItWorksSection } from "./sections/how-it-works-section";
import { FaqSection } from "./sections/faq-section";
import { OurTeamSection } from "./sections/our-team-section";
import { GradientDivider } from "./sections/gradient-divider";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist/waitlist-dialog";
import { MailIcon } from "lucide-react";
import { WaitlistSection } from "./sections/waitlist-section";

export default function LandingPage({
  searchParams,
}: {
  searchParams: { event?: string };
}) {
  return (
    <main className="size-full min-h-screen relative">
      <div className="bg-[url(/home-background.png)] bg-cover h-screen w-screen absolute inset-0 -z-10 pointer-events-none">
        <div className="bg-gradient-to-t size-full from-background to-background/0 to-30%"></div>
      </div>
      <HeroSection event={searchParams.event} />
      <BenefitsSection />
      <HowItWorksSection />
      <FaqSection />
      <OurTeamSection />
      <GradientDivider />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
