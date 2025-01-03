import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../context'

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext)

  function logout() {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar_links">
        <Link className="link" to="/about">
          О сайте
        </Link>
        <Link className="link" to="/posts">
          Посты
        </Link>
      </div>
    </div>
  )
}

export default Navbar
