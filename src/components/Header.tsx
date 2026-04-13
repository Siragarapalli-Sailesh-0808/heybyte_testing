'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image
                src="/Logo.png"
                alt="Company Logo"
                width={200}
                height={80}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex md:gap-x-3" style={{ fontFamily: 'var(--font-nav)' }}>
              <a
                className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-black hover:bg-slate-100"
                href="/"
              >
                Home
              </a>
              <a
                className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-black hover:bg-slate-100"
                href="/services"
              >
                Services
              </a>
              <a
                className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-black hover:bg-slate-100"
                href="/about-us"
              >
                About Us
              </a>
              <Link
                className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-black hover:bg-slate-100"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-6">


            <div className="-mr-1 md:hidden">
              <button
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                aria-label="Toggle Navigation"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path
                    d="M0 1H14M0 7H14M0 13H14"
                    className={`origin-center transition ${mobileMenuOpen ? 'scale-90 opacity-0' : ''}`}
                  />
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    className={`origin-center transition ${mobileMenuOpen ? '' : 'scale-90 opacity-0'}`}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="rounded-lg bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
              <nav className="flex flex-col gap-2">
                <a
                  className="inline-block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-slate-100"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="inline-block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-slate-100"
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  className="inline-block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-slate-100"
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <Link
                  className="inline-block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-slate-100"
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
