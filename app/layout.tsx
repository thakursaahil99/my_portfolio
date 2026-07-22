import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sahil Thakur| Full-Stack Developer",
  description:
    "Available for hiring.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}