import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { keywords } from "@/lib/seo";

const fontSans = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeniusXP",
  description: "Uma experiência genial em seus eventos",
  keywords,
  applicationName: "GeniusXP",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GeniusXP",
    url: "https://geniusxp.tech",
    description: "Uma experiência genial em seus eventos",
    title: "GeniusXP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontSans.className} antialiased flex relative `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
