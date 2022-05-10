import React from 'react'
import { Footer, Main, MainImage, MainLoginForm, MainWrapper } from './styles'
import login from '../../assets/images/login.png'

const Login: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <Main>
          <MainImage>
            <img src={login} alt='' />
          </MainImage>
          <MainLoginForm>a</MainLoginForm>
        </Main>
      </MainWrapper>
      <Footer></Footer>
    </>
  )
}

export default Login
