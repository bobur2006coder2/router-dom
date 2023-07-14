import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import NotFoundPage from './components/NotFound/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { NavEl } from './utils/utils'
import "./index.css"
import {motion, useScroll, useSpring } from 'framer-motion'

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
     <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <Routes>
        {NavEl.map((elem) => {
          return (
            <>
              <Route path={elem.path} element={elem.page} />

            </>
          )
        })}
        <Route path='*' element={<NotFoundPage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
