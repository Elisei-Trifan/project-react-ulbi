import Navbar from './components/UI/navbar/Navbar'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

/* <BrowserRouter>
      <Navbar />

      <Routes>
           <Route path="posts" element={<Posts />}/>
           <Route path="about" element={<About />}/>  
           <Route path="*" element={<Error />}/>
      </Routes>
</BrowserRouter>*/
