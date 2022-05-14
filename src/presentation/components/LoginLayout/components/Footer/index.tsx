import React from 'react'
import { FooterWrapper } from '@/presentation/components/shared/Footer/styles'
import { NavItens, Category, Copyright } from '@/presentation/components/shared/Footer'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <NavItens />
      <Category />
      <Copyright />
    </FooterWrapper>
  )
}

export default Footer
