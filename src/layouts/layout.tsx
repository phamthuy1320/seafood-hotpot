"use client";

import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box as={"main"} display={"grid"} gridTemplateRows={"min-content 1fr auto"}>
      <Header />
      <Box as={"article"} p={5}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
