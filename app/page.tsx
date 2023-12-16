"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import CompanyInfo from "@/components/Info";
import WhatYouGet from "@/components/WhatYouGet";
import StartProject from "@/components/StartProject";
import RectangleGrid from "@/components/RectangleGrid";
import Features from "@/components/Features2";

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <CompanyInfo />
      <WhatYouGet />
      {/* <SimpleThreeColumns /> */}
      {/* <RectangleGrid /> */}
      <Features />
      <StartProject />
      {/* <SimpleThreeColumns /> */}
    </>
  );
}
