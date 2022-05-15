import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const NavHack = styled.div`
  height: var(--mobile-nav-height);
  ${device.md`height: var(--desktop-nav-height);`};
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
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  height: var(--mobile-nav-height);
  ${device.md`height: var(--desktop-nav-height);`};
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

export const ProfileImageWrapper = styled.div`
  position: relative;

  .show {
    opacity: 1;
  }
`
export const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 100%;
`

export const ProfileMenu = styled(Flex)`
  position: absolute;
  opacity: 1;
  flex-direction: column;
  align-items: flex-start;
  transform-origin: top center;
  border-radius: 6px;
  right: -10px;
  top: 40px;
  width: 230px;
  z-index: 3;

  box-shadow: 0 0 5px 1px rgba(var(--black), .0975);

  svg {
    margin-right: 12px;
    width: 16px;
    height: 16px;
  }
`

export const IconUp = styled(Flex)`
  position: absolute;
  bottom: 0;
  top: -6px;
  right: 16px;
  z-index: -1;
  
  width: 14px;
  height: 14px;

  transform: rotate(45deg);
  border-radius: 1px;

  background-color: var(--background);
  border: 1px solid var(--background);
  box-shadow: 0 0 5px 1px rgba(var(--black),.0975);
`

export const ProfileMenuLink = styled.a`
  display: flex;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  color: var(--primary);
  text-decoration: none;
  padding: 8px 16px;
  outline: 0;
  white-space: nowrap;
  background-color: var(--background);
  
  &:hover {
    background-color: rgba(250, 250, 250, 1);
  }
`
