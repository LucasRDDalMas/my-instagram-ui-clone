import { NoSelect } from '@/presentation/components/shared/styles'
import React from 'react'
import { CopyRight, Link, Links, Wrapper } from './styles'

const Footer: React.FC = () => {
  return (
    <Wrapper>
    <Links>
      <Link>About</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Help</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Press</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>API</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Jobs</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Privacy</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Terms</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Locations</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Top Accounts</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Hashtags</Link>
      <NoSelect>&nbsp;&bull;&nbsp;</NoSelect>
      <Link>Language</Link>
    </Links>
    <CopyRight>© 2022 INSTAGRAM FROM META</CopyRight>
    </Wrapper>
  )
}

export default Footer
