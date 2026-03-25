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
  title: "Jerry Lee Melton — Full Stack Web Developer",
  description:
    "Portfolio of Jerry Lee Melton, a full stack web developer based in Portland, OR.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
