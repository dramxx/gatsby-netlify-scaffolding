import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="navbar">
    <div>
      <Link to="/" className="menu-link">
        home
      </Link>
    </div>
    <div className="menu">
      <Link to="/page-1" className="menu-link">
        page 1
      </Link>
      <Link to="/page-2" className="menu-link">
        page 2
      </Link>
      <Link to="/blog" className="menu-link">
        blog
      </Link>
    </div>
  </header>
)

export default Header
