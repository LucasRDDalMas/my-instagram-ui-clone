import React from 'react'
import { FooterWrapper } from '@/presentation/components/shared/Footer/styles'
import { NavItens, Copyright } from '@/presentation/components/shared/Footer'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <NavItens />
      <Copyright />
    </FooterWrapper>
  )
}

export default Footer
