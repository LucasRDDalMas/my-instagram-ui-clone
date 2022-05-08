import { MainLogo } from '@/presentation/assets/logos'
import React from 'react'
import { LogoImage, LogoLink, Wrapper } from './styles'

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LogoLink href='/' data-testid='logo-link'>
        <LogoImage src={MainLogo} alt='My Instagram' data-testid='logo-image' />
      </LogoLink>
    </Wrapper>
  )
}

export default Logo
