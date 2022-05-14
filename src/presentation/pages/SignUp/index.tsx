import React from 'react'
import { SignUpWrapper, Wrapper } from './styles'
import { SignUpFooter } from '@/presentation/components/SignUpLayout/components'
import SignUpLayout from '@/presentation/components/SignUpLayout'

const SignUp: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SignUpWrapper>
          <SignUpLayout />
        </SignUpWrapper>
      </Wrapper>

      <SignUpFooter />
    </>
  )
}

export default SignUp
