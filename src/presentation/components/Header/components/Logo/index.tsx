import { MainLogo } from '@/presentation/assets/logos'
import React from 'react'
import { LogoImage } from './styles'

const Logo: React.FC = () => {
  return <a href='/'><LogoImage src={MainLogo} alt='' /></a>
}

export default Logo
