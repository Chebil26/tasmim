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
          {/* for redux toolkit */}
          <ChakraProvider>
            {/* for charkra ui */}
            <div>
              <WithSubnavigation /> {/* navbar */}
              {children}
              <SmallWithSocial /> {/* footer */}
            </div>
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  );
}
