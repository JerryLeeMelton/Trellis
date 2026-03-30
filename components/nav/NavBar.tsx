"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)

  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <div className="nav-path-container">
          <p>
            ~ /
            <a href="/" className="nav-path-link">
              jerry
            </a>
            {segments.map((segment, i) => {
              const href = "/" + segments.slice(0, i + 1).join("/")
              return (
                <span key={href}>
                  /
                  <a href={href} className="nav-path-link">
                    {segment}
                  </a>
                </span>
              )
            })}
            /
          </p>
          <span className="blinking-cursor"></span>
        </div>
        <div className="nav-links-container">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            {/* <li>
            <a href="/blog">Blog</a>
          </li> */}
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
