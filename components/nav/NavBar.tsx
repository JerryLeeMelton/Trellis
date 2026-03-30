export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <div className="nav-path-container">
          <p>
            ~ /
            <a href="/" className="nav-path-link">
              jerry
            </a>
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
