"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import CompanyInfo from "@/components/Info";
import WhatYouGet from "@/components/WhatYouGet";
import StartProject from "@/components/StartProject";
import RectangleGrid from "@/components/RectangleGrid";

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <CompanyInfo />
      <WhatYouGet />
      <RectangleGrid />
      <StartProject />
      {/* <SimpleThreeColumns /> */}
    </>
  );
}
