import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";




const inter = Inter({ subsets: ['latin'] })
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Shuja Ul Islam - Front End Developer',
  description: 'Portfolio of Shuja Ul Islam, a Front End Developer specializing in React and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
