import React from 'react'

import { NavMobileWrapper } from './styles'
import { IconCamera, IconMessenger } from '@/presentation/assets/icons'
import Logo from '../Logo'

const MobileHeader: React.FC = () => {
  return (
    <NavMobileWrapper>
      <IconCamera size='24px' />

      <Logo />

      <IconMessenger size='24px' />
    </NavMobileWrapper>
  )
}

export default MobileHeader
