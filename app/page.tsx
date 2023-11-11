"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import CompanyInfo from "@/components/Info";
import WhatYouGet from "@/components/WhatYouGet";

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <CompanyInfo />
      <WhatYouGet />
      <SimpleThreeColumns />
    </>
  );
}
