import { MainLogo } from '@/presentation/assets/logos'
import React from 'react'
import { LogoImage } from './styles'

const Logo: React.FC = () => {
  return <a href='/' data-testid='logo-link'><LogoImage src={MainLogo} alt='My Instagram' data-testid='logo-image' /></a>
}

export default Logo
