import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Logout from './Logout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
