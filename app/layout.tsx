import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { ruRU } from "@clerk/localizations";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CloudStorage',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ruRU}>
      <html lang='ru'>
        <body className={inter.className}>
        <ToastContainer/>
        {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
