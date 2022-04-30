import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

const headerHeight = '44px'
const headerDesktopHeight = '60px'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavHack = styled.div`
  height: ${headerHeight};
  ${device.md`height: ${headerDesktopHeight};`};
`

export const NavWrapper = styled(Flex)`
  background: var(--background);
  position: fixed;
  top: 0;
  width: 100%;
  
  &::before{
    background-color: var(--border);
    bottom:-1px;
    content:'';
    height:1px;
    left:0;
    position: absolute;
    right:0;
  }
`

export const Nav = styled(Flex)`
  width: 90%;
  height: 100%;
  max-width: 975px;
  flex-direction: row;
  justify-content: space-between;
  height: ${headerHeight};
  ${device.md`height: ${headerDesktopHeight};`};
`

export const NavMobileWrapper = styled(Nav)`
  ${device.md`
    display: none;
  `};
`

export const NavDesktopWrapper = styled(Nav)`
  display: none;
  ${device.md`
    display: flex;
  `};
`

export const Logo = styled.img`
  width: 110px;
  margin-top: 10px;
  cursor: pointer;
`

export const Search = styled(Flex)`
  background: var(--background-main);
  border-radius: 8px;
  padding: 3px 16px;
  border: 1px solid var(--border);
  height: 36px;
  min-width: 125px;
  width: 268px;

  .hide {
    display: none;
  }
`

export const SearchInput = styled.input`
  font-size: 14px;
  padding: 0 8px;
  width: 100%;
`

export const Menu = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 22px;
  cursor: pointer;
  padding-left: 16px;
  white-space: nowrap;
`

export const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 100%;
`
