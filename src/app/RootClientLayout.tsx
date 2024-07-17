// src/app/RootClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isChecked ? 'light' : 'dark'
    );
  }, [isChecked]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-20">
        <Navbar isChecked={isChecked} onToggle={handleToggle} />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
