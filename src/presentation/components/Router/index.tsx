import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  Feed: React.FC
}

const Router: React.FC<Props> = ({ Feed }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
