import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRouter {
  Feed: React.FC
  Profile: React.FC
  SignIn: React.FC
  SignUp: React.FC
}

const Router: React.FC<IRouter> = ({ Feed, SignIn, SignUp, Profile }: IRouter) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/:username' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
