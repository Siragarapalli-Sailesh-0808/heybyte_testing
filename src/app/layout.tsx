import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "HeyByte | App Development, Website Development & Software Solutions",
  description:
    "HeyByte is a leading software development company offering mobile app development, website design, web applications, eCommerce solutions, custom software, and digital transformation services.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  keywords: [
    "HeyByte",
    "software development company",
    "app development company",
    "website development company",
    "mobile app developers",
    "web development services",
    "custom software development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
