import Link from 'next/link'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-8 sm:pt-8 pb-4 sm:pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Brand Section */}
            <div className="md:col-span-1 flex flex-col justify-between items-center md:items-start">
              <div>
                <Link href="/" aria-label="Home" className="inline-flex items-center">
                  <Image
                    src="/Logo.png"
                    alt="Company Logo"
                    width={200}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <p className="mt-4 text-gray-600 max-w-md font-nav">
                  Your strategic partner for modern, scalable software solutions.
                </p>
              </div>
            </div>



            {/* Company Section */}
            <div className="flex flex-col items-center md:items-start pb-4 sm:pb-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-nav">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about-us" className="text-gray-700 hover:text-indigo-600 transition-colors font-nav">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-nav">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-nav">Contact</Link>
                </li>
              </ul>
            </div>


            {/* Socials Section */}
            <div className="flex flex-col items-center md:items-start pb-4 sm:pb-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-nav">Socials</h3>
              <ul className="mt-4 flex space-x-6">
                {/* <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.57 1.67 4.95a4.48 4.48 0 0 0-.607 2.26c0 1.56.795 2.94 2.005 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42a4.48 4.48 0 0 1-2.03.077c.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.1 9.1 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                    </svg>

                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </a>
                </li> */}
                <a href="tel:+918143528142" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </a>
                <a href="mailto:hi@heybyte.in" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.628a2.25 2.25 0 0 1-2.28 0l-7.5-4.628A2.25 2.25 0 0 1 2.25 6.993V6.75m19.5 0h-19.5" />
                  </svg>
                </a>
                <a href="https://wa.me/8143528142?text=Hi%2C%20interested%20in%20your%20software%20services.%20Free%20for%20a%20quick%20call%3F" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </ul>
            </div>
          </div>

          <hr className="border-slate-200" />


          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-0 py-4 sm:py-4 text-center">
            <p className="text-sm text-gray-500 font-nav">© 2026 heybyte. All rights reserved.</p>
            {/* <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-nav">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-nav">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-nav">Cookie Policy</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
