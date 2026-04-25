import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Qymafrique Solutions - Web Development & Digital Solutions",
  description:
    "Professional web development, mobile apps, and digital solutions. Building beautiful, functional digital experiences for businesses across Africa.",
  icons: {
    icon: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}