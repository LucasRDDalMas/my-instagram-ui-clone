import React from 'react'
import { CopyRight, Footer, Language, LanguageSelect, Link, Links, Main, MainImage, MainLoginWrapper, MainWrapper } from './styles'
import LoginImage from '@/presentation/assets/images/login.png'
import Loginlayout from '@/presentation/components/LoginLayout'
import { IconDown } from '@/presentation/assets/icons'

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
      <Footer>
        <Links>
          <Link href=''>Meta</Link>
          <Link href=''>About</Link>
          <Link href=''>Blog</Link>
          <Link href=''>Jobs</Link>
          <Link href=''>Help</Link>
          <Link href=''>API</Link>
          <Link href=''>Privacy</Link>
          <Link href=''>Terms</Link>
          <Link href=''>Top Accounts</Link>
          <Link href=''>Hashtags</Link>
          <Link href=''>Locations</Link>
          <Link href=''>Instagram Lite</Link>
        </Links>
        <Links>
          <Link href=''>Dance</Link>
          <Link href=''>Food & Drink</Link>
          <Link href=''>Home & Garden</Link>
          <Link href=''>Music</Link>
          <Link href=''>Visual Arts</Link>
        </Links>
        <CopyRight>
          <Language>
            English<IconDown size='16' />
            <LanguageSelect aria-label="Switch Display Language">
              <option value="en">English</option>
              <option value="pt-br">Português (Brasil)</option>
            </LanguageSelect>
          </Language>
          <span>© 2022 Instagram from Meta</span>
        </CopyRight>
      </Footer>
    </>
  )
}

export default Login
