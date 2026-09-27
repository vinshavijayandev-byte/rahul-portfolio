import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Barlow_Condensed } from "next/font/google";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata = {
  title: "Rahul Krishnan | UI/UX & Visual Designer in Dubai",
  description: "Dubai-based UI/UX & Visual Designer with 6 years of experience crafting intuitive digital products, design systems, responsive interfaces and impactful visual experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlowCondensed.variable}>
      <head>
        <link rel="icon" href="/meta.jpg" sizes="any" />
        <meta property="og:image" content="/meta.jpg" />
        <meta property="twitter:image" content="/meta.jpg" />
      </head>

      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}