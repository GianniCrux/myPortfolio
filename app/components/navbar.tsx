"use client";

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg hover:text-green-500">&lt;Gianni /&gt;</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Me</Link>
            <Link href="/projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projects</Link>
            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Me</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">About Me</Link>
        <Link href="/projects" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Projects</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Contact Me</Link>
      </div>
    </nav>
  );
};