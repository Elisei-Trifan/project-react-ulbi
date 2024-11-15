import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostIdPage from './pages/PostIdPage'

export default function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostIdPage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
