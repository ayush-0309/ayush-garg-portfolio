import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import { PlantProvider } from "@/components/PlantContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ayush Garg — Desk",
  description:
    "Portfolio of Ayush Garg — Technology & Business Management student at Masters' Union, building toward Founder's Office and Marketing roles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable} h-full`}
    >
      <body className="h-full">
        <PlantProvider>{children}</PlantProvider>
      </body>
    </html>
  );
}
