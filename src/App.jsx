import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import { HomePage } from './pages/HomePage'
import { NavEl } from './utils/utils'
export default function App() {
  return (
    <div>
   <Navbar/>
  <Routes>
   {NavEl.map((elem)=>{
    return(

      <Route path={elem.path} element= {elem.page}/>
    )
   })}
  </Routes>
    </div>
  )
}
