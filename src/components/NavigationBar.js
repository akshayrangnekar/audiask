"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NavigationBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-primary w-full">
        <div className="flex items-center justify-between py-2">
          {/* Left Side: Logo and Primary Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-lg font-bold pl-4">
              <Link href="/" className="text-primary-inverse hover:text-primary-inverse">
                Logo
              </Link>
            </div>
            {/* Primary Links */}
            <div className="hidden md:flex ml-5 space-x-5">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-inverse-dull hover:text-primary-inverse"
              >
                Google
              </a>
              <a
                href="https://www.yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-inverse-dull hover:text-primary-inverse"
              >
                Yahoo
              </a>
            </div>
          </div>

          {/* Right Side: Secondary Links and Hamburger Menu */}
          <div className="flex items-center">
            {/* Secondary Links */}
            <div className="hidden md:flex space-x-5 pr-4">
              <a
                href="https://news.bbc.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-inverse-dull hover:text-primary-inverse"
              >
                BBC
              </a>
              <a
                href="https://www.cnn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-inverse-dull hover:text-primary-inverse"
              >
                CNN
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden pr-4">
              <button onClick={() => setIsSidebarOpen(true)} aria-label="Open Menu">
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6 text-primary-inverse"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Overlay Background */}
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-4/5 bg-primary p-5">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)} aria-label="Close Menu">
              {/* Close Icon */}
              <svg
                className="w-6 h-6 text-primary-inverse"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Primary Links */}
          <nav className="mt-5">
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-inverse-dull hover:text-primary-inverse text-xl"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href="https://www.yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-inverse-dull hover:text-primary-inverse text-xl"
                >
                  Yahoo
                </a>
              </li>
            </ul>
          </nav>

          {/* Divider Line */}
          <hr className="my-5 border-primary-inverse-dull" />

          {/* Secondary Links */}
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://news.bbc.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-inverse-dull hover:text-primary-inverse text-xl"
                >
                  BBC
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-inverse-dull hover:text-primary-inverse text-xl"
                >
                  CNN
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}