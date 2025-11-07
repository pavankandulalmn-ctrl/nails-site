// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Done by Nita",
  description: "Nailz done by Nita — pretty nails, cozy vibes, gentle care",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
