import React from 'react'
import { LoginLogo, LoginSocial, LoginWrapper, Policy, Title } from './styles'
import { MainLogo } from '@/presentation/assets/logos'
import { Divider } from '@/presentation/components/shared/styles'
import { IconFacebook } from '@/presentation/assets/icons'
import { SignUpForm, SignUpLogin } from './components'
import Apps from '@/presentation/components/shared/Apps'

const SignUpLayout: React.FC = () => {
  return (
    <>
      <LoginWrapper>
        <LoginLogo>
          <img src={MainLogo} alt='' />
        </LoginLogo>

        <Title>Sign up to see photos and videos from your friends.</Title>

        <LoginSocial>
          <IconFacebook size='24' fill='#FFF' />
          <span>Log in with Facebook</span>
        </LoginSocial>

        <Divider>Or</Divider>

        <SignUpForm />

        <Policy>
          By signing up, you agree to our <a href=''>Terms</a>, <a href=''>Data Policy</a> and <a href=''>Cookies Policy</a>.
        </Policy>
      </LoginWrapper>

      <SignUpLogin />
      <Apps />
    </>
  )
}

export default SignUpLayout
