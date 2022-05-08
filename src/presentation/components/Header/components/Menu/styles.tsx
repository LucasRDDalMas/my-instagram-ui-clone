import styled from 'styled-components'
import { device } from '@/presentation/utils/media-query'
import { Nav, Flex } from '@/presentation/components/Header/styles'

export const NavDesktopWrapper = styled(Nav)`
  display: none;
  ${device.md`
    display: flex;
  `};
`

export const MenuWrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex: 1 0 127px;
  align-items: center;
  gap: 22px;
  padding-left: 16px;
  white-space: nowrap;

  svg {
    cursor: pointer;
  }
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
  cursor: pointer;
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
