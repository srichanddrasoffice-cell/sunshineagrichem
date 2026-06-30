import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurStory from "@/components/about/OurStory";


export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <OurStory />
     
    </main>
  );
}