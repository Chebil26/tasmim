"use client";
import { ChakraProvider } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer";

import { Providers } from "./Redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <Providers>
          <ChakraProvider>
            <div>
              <WithSubnavigation />
              {children}
              <SmallWithSocial />
            </div>
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  );
}
