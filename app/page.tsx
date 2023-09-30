"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import CompanyInfo from "@/components/Info";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <Test />
      <CallToActionWithAnnotation />

      <CompanyInfo />
      <SimpleThreeColumns />
    </>
  );
}
