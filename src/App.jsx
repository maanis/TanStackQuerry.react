import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Nq from './Components/Nq'
import Rq from './Components/Rq'

const App = () => {
  const data = [
    { path: '/', Element: <Home /> },
    { path: '/about', Element: <About /> },
    { path: '/nq', Element: <Nq /> },
    { path: '/rq', Element: <Rq /> },
  ]
  return (
    <>
      <Navbar />
      <Routes>
        {data.map((e) => {
          return <Route path={e.path} element={e.Element} />
        })}
      </Routes>
    </>
  )
}

export default App
