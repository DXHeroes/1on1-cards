import type { Metadata } from "next";
import { Inter, Staatliches } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });
const staatliches = Staatliches({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${staatliches.className} font-inter bg-athens-gray text-purple pt-12 pb-24`}>
        <Navigation />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      </body>
    </html>
  );
}
