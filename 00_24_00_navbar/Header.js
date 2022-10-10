import React from "react"

// export default function Header() {
function Header() {
  return(
    <header>
      <nav className="nav">
        {/* <h1>Reasons I'm excited to learn React</h1> */}
        <img src="./react_logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header