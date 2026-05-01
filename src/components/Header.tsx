'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="relative mx-auto h-16 max-w-7xl px-4 sm:h-20 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex h-full items-center justify-between">
          <div className="flex min-w-0 items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image
                src="/Logo.png"
                alt="Company Logo"
                width={200}
                height={80}
                className="h-8 w-auto object-contain sm:h-10"
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
          <div className="flex shrink-0 items-center gap-x-2 md:gap-x-6">
            <div className="md:hidden">
              <button
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100"
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
          <div className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 md:hidden">
            <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5">
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
