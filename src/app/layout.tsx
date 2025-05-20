import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/layouts/layout";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { theme } from "@/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Seafood Hotpot",
  description: "Seafood Hotpot Delivery Homepage",
  manifest: "manifest.json",
  icons: {
    icon: `favicon.ico`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`green ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChakraProvider resetCSS={false}>
          <ThemeProvider theme={theme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
