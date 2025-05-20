"use client";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#006a31",
    overlay: "rgba(0, 106, 49, 0.7)"
  }
});

export type TTheme = typeof theme;
