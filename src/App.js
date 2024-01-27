import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Servies from './Components/Servies'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
       <Navbar/>
      <Routes>
       <Route path='/Home' element={<Home/>}></Route> 
       <Route path='/About' element={<About/>}></Route> 
       <Route path='/Contact' element={<Contact/>}></Route>
       <Route path='/Servies' element={<Servies/>}></Route>
        </Routes>
        </div>
  )
}

export default App