import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'

const AppRouter = () => {
  let isAuth = false
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
