import React, { useRef, useState } from 'react'

import { IconContext } from 'react-icons/lib'

import { IconUp, MenuWrapper, ProfileImage, ProfileImageWrapper, ProfileMenu, ProfileMenuLink } from './styles'
import { IconBookmark, IconCompass, IconGearWide, IconHeart, IconHome, IconMessenger, IconOutlineHome, IconPlusSquare, IconProfile, IconSwitch } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const profileMenuRef = useRef<HTMLHeadingElement>(null)

  const setMenu = (): void => {
    setShowMenu(!showMenu)
  }

  /* istanbul ignore next */
  useOutsideAlerter(profileMenuRef, () => { setShowMenu(false) })

  return (
    <MenuWrapper>
      <IconContext.Provider value={{ size: '24px' }}>
        {showMenu ? <IconOutlineHome data-testid='icon-home-off' /> : <IconHome data-testid='icon-home-on' />}
        <IconPlusSquare />
        <IconHeart />
        <IconCompass />
        <IconMessenger />
      </IconContext.Provider>

      <ProfileImageWrapper ref={profileMenuRef}>
        <ProfileImage onClick={setMenu} data-testid='profile-button' src="https://avatars.githubusercontent.com/u/15267415?s=40&v=4" />
        {showMenu && (
          <ProfileMenu data-testid='profile-menu'>
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
    </MenuWrapper>
  )
}

export default Menu
