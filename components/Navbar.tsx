"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-sm shadow-pink-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-vqpet.png"
            alt="VQPET"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Cómo funciona
          </a>
          <a href="#beneficios" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Beneficios
          </a>
          <a href="#preventa" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Preventa
          </a>
          <a
            href="https://www.instagram.com/vqpet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 transition-colors px-5 py-2 rounded-full shadow-md shadow-pink-200"
          >
            Conseguilo ya
          </a>
        </nav>

        {/* Mobile hamburger placeholder — sticky CTA handles mobile CTA */}
        <a
          href="https://www.instagram.com/vqpet/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-sm font-medium text-pink-500 border border-pink-300 px-4 py-1.5 rounded-full"
        >
          @vqpet
        </a>
      </div>
    </header>
  );
}
