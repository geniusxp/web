import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { description, keywords } from "@/lib/seo";
import { cn } from "@/lib/utils";

const fontSans = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeniusXP",
  description,
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
  metadataBase: new URL("https://geniusxp.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={cn(fontSans.className, "antialiased flex relative")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
