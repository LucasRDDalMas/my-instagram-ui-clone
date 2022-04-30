import { MainLogo } from '@/presentation/assets/logos'
import React, { useState } from 'react'

import { AiFillHome, AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'
import { MdOutlineExplore } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

import { Logo, Menu, NavDesktopWrapper, NavHack, NavMobileWrapper, NavWrapper, ProfileImage, Search, SearchInput } from './styles'

const Header: React.FC = () => {
  const [hideSearchIcon, setHideSearchIcon] = useState(false)

  return (
    <>
      <NavHack />
      <NavWrapper>
        <NavDesktopWrapper>
          <a href='/'><Logo src={MainLogo} alt='' /></a>

          <Search>
            <AiOutlineSearch color='#8e8e8e' className={hideSearchIcon ? 'hide' : ''} />
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
              <AiFillHome />
              <BsPlusSquare />
              <FiHeart />
              <MdOutlineExplore />
              <RiMessengerLine />
            </IconContext.Provider>
            <ProfileImage src="https://github.com/gabrieldiasss.png" />
          </Menu>
        </NavDesktopWrapper>

        <NavMobileWrapper>
          <AiOutlineCamera size='24px' />
          <a href='/'><Logo src={MainLogo} alt='' /></a>
          <RiMessengerLine size='24px' />
        </NavMobileWrapper>
      </NavWrapper>
    </>
  )
}

export default Header
