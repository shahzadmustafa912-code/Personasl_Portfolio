import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

const CursorBall = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div
      aria-hidden='true'
      className='pointer-ball'
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  )
}

const App = () => {
  return (
    <div className='min-h-screen bg-dark-100 text-white'>
      <CursorBall />
      <Navbar />
      <Routes>

        <Route  path='/' element={<Home />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
                      