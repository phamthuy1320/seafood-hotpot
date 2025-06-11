"use client";

import { theme } from "@/theme";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider resetCSS={false}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ChakraProvider>
  );
}
