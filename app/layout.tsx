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
  title: "Home | Rahul",
  description: "Hey, Rahul here! Welcome to my website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlowCondensed.variable}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta property="og:image" content="/meta.png" />
        <meta property="twitter:image" content="/meta.png" />
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