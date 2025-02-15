'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Navbar from './_Components/Navbar/page';
import Products from "./_Components/Products/page";
import Footer from "./_Components/Footer/Page";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>NextStore</title>
      <body
        className={`roboto.variable  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <div className="min-h-screen">
        {children}
      </div>
           
      <Footer/>
           </ThemeProvider>
      </AppRouterCacheProvider>
     
      </body>
    </html>
  );
}
