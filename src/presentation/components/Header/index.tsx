import React from 'react'
import { NavHack, NavWrapper } from './styles'
import DesktopHeader from './components/DesktopHeader'
import MobileHeader from './components/MobileHeader'

const Header: React.FC = () => {
  return (
    <>
      <NavHack />
      <NavWrapper>
        <DesktopHeader />
        <MobileHeader />
      </NavWrapper>
    </>
  )
}

export default Header
