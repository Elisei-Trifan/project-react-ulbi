import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from './context'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element}></Route>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element}></Route>
      ))}
    </Routes>
  )
}

export default AppRouter
