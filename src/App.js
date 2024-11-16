/* eslint-disable no-unused-vars */
import { useState } from 'react'
import AppRouter from './components/AppRouter'
import { AuthContext } from './components/context'
import Navbar from './components/UI/navbar/Navbar'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
