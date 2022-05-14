import React from 'react'
import { Main, MainImage, MainLoginWrapper, MainWrapper } from './styles'
import LoginImage from '@/presentation/assets/images/login.png'
import Loginlayout from '@/presentation/components/LoginLayout'
import Footer from '@/presentation/components/LoginLayout/components/Footer'

const Login: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <Main>
          <MainImage>
            <img src={LoginImage} alt='' />
          </MainImage>
          <MainLoginWrapper>
            <Loginlayout />
          </MainLoginWrapper>
        </Main>
      </MainWrapper>
      <Footer />
    </>
  )
}

export default Login
