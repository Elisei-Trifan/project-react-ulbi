/* eslint-disable no-unused-vars */
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}
