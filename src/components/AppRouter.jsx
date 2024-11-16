import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from './context'

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext)
  console.log(isAuth)

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
