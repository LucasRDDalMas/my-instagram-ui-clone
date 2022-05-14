import React from 'react'
import { Apps, AppsLinks, Footer, ForgotPassword, LoginForm, LoginFormButton, LoginFormInput, LoginLogo, LoginSocial, LoginWrapper, Main, MainImage, MainLoginWrapper, MainWrapper, SignUpWrapper } from './styles'
import LoginImage from '../../assets/images/login.png'
import GooglePlay from '../../assets/images/google-play.png'
import AppStore from '../../assets/images/app-store.png'
import { MainLogo } from '@/presentation/assets/logos'
import { Divider } from '@/presentation/components/shared/styles'
import { IconFacebook } from '@/presentation/assets/icons'

const Login: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <Main>
          <MainImage>
            <img src={LoginImage} alt='' />
          </MainImage>
          <MainLoginWrapper>
            <LoginWrapper>
              <LoginLogo>
                <img src={MainLogo} alt=''/>
              </LoginLogo>
              <LoginForm>
                <LoginFormInput type='text' name='' value='' placeholder='' />
                <LoginFormInput type='password' name='' value='' placeholder='' />
                <LoginFormButton>Log In</LoginFormButton>
              </LoginForm>

              <Divider>Or</Divider>

              <LoginSocial>
                <IconFacebook size='24' color='#385184' />
                <span>Log in with Facebook</span>
              </LoginSocial>

              <ForgotPassword>
                Forgot password?
              </ForgotPassword>
            </LoginWrapper>
            <SignUpWrapper>
              Don&apos;t have an account?&nbsp;<a href=''>Sign up</a>
            </SignUpWrapper>
            <Apps>
              <p>Get the app.</p>
              <AppsLinks>
                <a href=''>
                  <img src={GooglePlay} alt='' />
                </a>
                <a href=''>
                  <img src={AppStore} alt='' />
                </a>
              </AppsLinks>
            </Apps>
          </MainLoginWrapper>
        </Main>
      </MainWrapper>
      <Footer></Footer>
    </>
  )
}

export default Login
