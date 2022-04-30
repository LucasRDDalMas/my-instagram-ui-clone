import React from 'react'
import { NavDesktopWrapper } from './styles'
import Logo from '../Logo'
import Menu from '../Menu'
import Search from '../Search'

const DesktopHeader: React.FC = () => {
  return (
    <NavDesktopWrapper>
      <Logo />
      <Search />
      <Menu />
    </NavDesktopWrapper>
  )
}

export default DesktopHeader
