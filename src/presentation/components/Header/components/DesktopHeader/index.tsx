import React, { useRef, useState } from 'react'

import { IconContext } from 'react-icons/lib'

import { IconUp, Menu, NavDesktopWrapper, ProfileImage, ProfileImageWrapper, ProfileMenu, ProfileMenuLink, Search, SearchInput } from './styles'
import { IconBookmark, IconCompass, IconGearWide, IconHeart, IconHome, IconMessenger, IconOutlineHome, IconPlusSquare, IconProfile, IconSearch, IconSwitch } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import Logo from '../Logo'

const DesktopHeader: React.FC = () => {
  const [hideSearchIcon, setHideSearchIcon] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const setMenu = (): void => {
    setShowMenu(!showMenu)
  }

  const profileMenuRef = useRef(null)
  useOutsideAlerter(profileMenuRef, () => {
    setShowMenu(false)
  })

  return (
    <NavDesktopWrapper>
      <Logo />

      <Search>
        <IconSearch color='#8e8e8e' className={hideSearchIcon ? 'hide' : ''} />
        <SearchInput
          placeholder='Search'
          onFocus={() => {
            setHideSearchIcon(true)
          }}
          onBlur={() => {
            setHideSearchIcon(false)
          }}
        />
      </Search>

      <Menu>
        <IconContext.Provider value={{ size: '24px' }}>
          {showMenu ? <IconOutlineHome /> : <IconHome />}
          <IconPlusSquare />
          <IconHeart />
          <IconCompass />
          <IconMessenger />
        </IconContext.Provider>

        <ProfileImageWrapper ref={profileMenuRef}>
          <ProfileImage onClick={setMenu} src="https://avatars.githubusercontent.com/u/15267415?s=40&v=4" />
          {showMenu && (
            <ProfileMenu>
              <IconUp />
              <ProfileMenuLink>
                <IconProfile /> Profile
              </ProfileMenuLink>
              <ProfileMenuLink>
                <IconBookmark /> Saved
              </ProfileMenuLink>
              <ProfileMenuLink>
                <IconGearWide /> Settings
              </ProfileMenuLink>
              <ProfileMenuLink>
                <IconSwitch /> Switch Accounts
              </ProfileMenuLink>
              <hr />
              <ProfileMenuLink>Log Out</ProfileMenuLink>
            </ProfileMenu>
          )}
        </ProfileImageWrapper>
      </Menu>
    </NavDesktopWrapper>
  )
}

export default DesktopHeader
