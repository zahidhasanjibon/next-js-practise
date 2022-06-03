import Link from "next/link"
import React from 'react'

function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href='/'>
          <a className="nav-link active" aria-current="page">Home</a>
          </Link>
        </li>
        <li className="nav-item">
    <Link href='/about'>
    <a className="nav-link">About</a>
    </Link>
        </li>
        <li className="nav-item">
          <Link href='/contact'>
          <a className="nav-link">Contact</a></Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
  )
}

export default header