"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer2";

import { Providers } from "./Redux/provider";
const colors = {
  brand_blue: {
    500: "#001e6c",
  },

  brand_yellow: {
    900: "#e8630a",
    500: "#fcd900",
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
