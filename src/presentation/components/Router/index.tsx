import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRouter {
  Feed: React.FC
  Login: React.FC
}

const Router: React.FC<IRouter> = ({ Feed, Login }: IRouter) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
