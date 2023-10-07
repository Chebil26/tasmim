"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer";

import { Providers } from "./Redux/provider";
const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
};

const theme = extendTheme({ colors });

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
          <ChakraProvider theme={theme}>
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
