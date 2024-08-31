import type { Metadata } from "next";
import { siteConfig } from "@/config/sites";
import "../styles/globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Providers } from "./providers";
import {
  roboto,
  roboto_mono,
  cairo,
  exo_2,
  josefin_sans,
  maven_pro,
  ubuntu,
} from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${roboto_mono.variable} antialiased`}
    >
      <body className={maven_pro.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
