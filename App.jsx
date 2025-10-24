import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          {/* Ruta comodín si quieres: <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </div>
  )
}
