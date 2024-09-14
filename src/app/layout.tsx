import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Sidebar } from "@/components/app/sidebar";
import { Providers } from "./providers";

const fontSans = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeniusXP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${fontSans.className} ${fontSans.className} antialiased flex relative `}
      >
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
