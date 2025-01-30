import type { Metadata } from "next";
import { Inter, Staatliches } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });
const staatliches = Staatliches({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: '1:1 Meeting Cards | Lead Better One-on-One Conversations',
  description: 'Lead meaningful 1on1 conversations that strengthen your team and drive growth. A curated collection of conversation cards for better team management.'
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''} />
      </body>
    </html>
  );
}
