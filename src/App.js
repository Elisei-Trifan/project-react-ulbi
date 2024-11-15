/* eslint-disable no-unused-vars */
import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostIdPage from './pages/PostIdPage'
import { routes } from './router/routes'

export default function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}
