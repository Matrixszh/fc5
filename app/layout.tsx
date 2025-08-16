// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Banner from "@/components/Banner"; // Import the Banner component

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrossFire",
  description: "The next generation of fire protection and integrated security",
  icons: {
    icon: "https://fc5.vercel.app/_next/static/media/logo2.98b14312.png",
  },
  openGraph: {
    title: "CrossFire",
    description: "The next generation of fire protection and integrated security",
    images: [
      {
        url: "https://fc5.vercel.app/_next/static/media/logo2.98b14312.png",
        width: 1200,
        height: 630,
        alt: "Xcellent Tires Logo",
      },
    ],
    url: "https://fc5.vercel.app/_next/static/media/logo2.98b14312.png",
    siteName: "CrossFire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFire",
    description: "The next generation of fire protection and integrated security",
    images: [
      "https://fc5.vercel.app/_next/static/media/logo2.98b14312.png",
    ],
  },
  metadataBase: new URL("https://xcellenttires.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        {/* Add the Banner component here */}
        <Banner />
        
        {children}
      </body>
    </html>
  );
}