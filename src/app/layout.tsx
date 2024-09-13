import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontSans = Poppins({
  weight: ["400", "500", "600"],
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
    <html lang="pt-BR">
      <body
        className={`${fontSans.className} ${fontSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
