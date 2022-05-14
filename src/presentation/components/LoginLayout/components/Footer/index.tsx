import React from 'react'
import { CopyRight, FooterWrapper, Language, LanguageSelect, Link, Links } from './styles'
import { IconDown } from '@/presentation/assets/icons'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  )
}

export default Footer
