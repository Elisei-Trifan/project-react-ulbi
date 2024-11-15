import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar_links">
      <Link className="link" to="/about">
        О сайте
      </Link>
      <Link className="link" to="/posts">
        Посты
      </Link>
    </div>
  )
}

export default Navbar
