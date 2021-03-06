import React from 'react'
import { Main, MainImage, MainLoginWrapper, MainWrapper } from './styles'
import LoginImage from '@/presentation/assets/images/login.png'
import LoginLayout from '@/presentation/components/LoginLayout'
import Footer from '@/presentation/components/LoginLayout/components/Footer'

const SignIn: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <Main>
          <MainImage>
            <img src={LoginImage} alt='' />
          </MainImage>
          <MainLoginWrapper>
            <LoginLayout />
          </MainLoginWrapper>
        </Main>
      </MainWrapper>
      <Footer />
    </>
  )
}

export default SignIn
