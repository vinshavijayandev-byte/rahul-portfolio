import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Home | <yzk/>",
  description: `Hey, Vysakh here! Welcome to my website. I'm a full-stack JavaScript developer with over four years of professional experience. I have a passion for creating solutions that address real-world challenges.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta property="og:image" content="/meta.png" />
        <meta property="twitter:image" content="/meta.png" />
      </head>
      <body className={`${poppins.className}`}>
        <div
          style={{
            zIndex: "100 !important",
          }}
        >
          <Header />
        </div>
        <div
          style={{
            zIndex: "0 !important",
          }}
        >
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
