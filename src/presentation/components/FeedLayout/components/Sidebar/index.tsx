import React from 'react'
import Suggestion from './components/Suggestion'
import SwitchAccount from './components/SwitchAccount'
import Footer from './components/Footer'
import { Wrapper } from './styles'

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <SwitchAccount />
      <Suggestion />
      <Footer />
    </Wrapper>
  )
}

export default Sidebar
