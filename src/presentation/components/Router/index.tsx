import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRouter {
  Feed: React.FC
  SignIn: React.FC
}

const Router: React.FC<IRouter> = ({ Feed, SignIn }: IRouter) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
