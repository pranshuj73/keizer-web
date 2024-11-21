import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "~/src/components/ui/navbar";
import { dmMono, spaceGrotesk } from "~/src/config/font";

export const metadata: Metadata = {
  title: "keizer",
  description:
    "Unleashing Creativity Across Digital Platforms, From stunning websites to immersive games and motion graphics, we bring your vision to life with cutting-edge design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased dark bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
