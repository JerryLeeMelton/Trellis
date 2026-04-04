"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
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

          {/* Desktop nav links */}
          <div className="nav-links-container">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="nav-drawer-overlay" onClick={closeMenu} />
      )}

      {/* Slide-in drawer */}
      <div className={`nav-drawer${isMenuOpen ? " nav-drawer--open" : ""}`}>
        <button
          className="nav-drawer-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &#x2715;
        </button>
        <ul className="nav-drawer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
