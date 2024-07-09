"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <>
    <nav
        className={`bg-white shadow-lg dark:bg-zinc-950 fixed top-0 left-0 w-full z-50 transition duration-300`}
      >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg hover:text-green-500 dark:hover:text-green-500 dark:text-white">&lt;Gianni /&gt;</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Me</Link>
            <Link href="/projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projects</Link>
            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Me</Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button focus:outline-none" onClick={handleMenuToggle}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500 dark:text-white"
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
    </nav>

    {isOpen && (
      <div
        className='fixed  inset-0 bg-slate-950 bg-opacity-50 z-40 transition-opacity duration-300'
        onClick={handleMenuToggle}
      />
    )}

      <div 
        className={`fixed top-0 right-0 w-4/5 max-w-sm bg-white dark:bg-black h-full z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex flex-col space-y-2 p-4 h-full'>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black dark:text-white transition duration-300">About Me</Link>
        <Link href="/projects" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black dark:text-white transition duration-300">Projects</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white text-black dark:text-white transition duration-300">Contact Me</Link>
        <ThemeToggle />
        </div>
      </div>
    </>
  );
};
