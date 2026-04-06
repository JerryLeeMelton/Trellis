import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./styles.css"
import NavBar from "@/components/nav/NavBar"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jerryleemelton.com"),
  title: {
    default: "Jerry Lee Melton — Full Stack Web Developer",
    template: "%s — Jerry Lee Melton",
  },
  description:
    "Portfolio of Jerry Lee Melton, a full stack web developer based in Portland, OR.",
  openGraph: {
    siteName: "Jerry Lee Melton",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jerry Lee Melton — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
