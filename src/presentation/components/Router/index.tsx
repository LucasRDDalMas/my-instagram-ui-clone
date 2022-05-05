import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRouter {
  Feed: React.FC
}

const Router: React.FC<IRouter> = ({ Feed }: IRouter) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
