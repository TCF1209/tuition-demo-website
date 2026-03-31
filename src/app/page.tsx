"use client";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoursesPreview } from "@/components/CoursesPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <CoursesPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
