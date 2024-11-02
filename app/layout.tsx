import Header from "@/ui/layout/header";
import type { Metadata } from "next";
import { Homenaje } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moov",
  description: "Yield, Volatility and Points Trading Platform",
  metadataBase: new URL("https://app.stablejack.xyz/"),
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/droheqpxn/image/upload/v1730498372/movie-watch/icon_talulx.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/droheqpxn/image/upload/v1730498372/movie-watch/icon_talulx.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

const homenaje = Homenaje({
  preload: true,
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-w-full min-h-full text-white">
      <body className={`${homenaje.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
