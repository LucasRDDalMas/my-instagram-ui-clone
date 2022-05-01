import { IconMenuDots } from '@/presentation/assets/icons'
import React, { useState } from 'react'
import Modal from '../PopUp'
import { Header, HeaderAvatar, HeaderUserInfo, Location, OptionsWrapper, UserInfo, Username, Wrapper } from './styles'

const Post: React.FC = () => {
  const [showOptionsPopupMenu, setShowOptionsPopupMenu] = useState(false)
  return (
    <>
      <Wrapper>
        <UserInfo>
          <Header>
            <HeaderAvatar>
              <div className='story'>
                <img src='https://picsum.photos/500' alt='' />
              </div>
            </HeaderAvatar>
            <HeaderUserInfo>
              <Username>avatar</Username>
              <Location>Republic City</Location>
            </HeaderUserInfo>
          </Header>

          <OptionsWrapper onClick={() => {
            setShowOptionsPopupMenu(true)
          }}>
            <button>
              <IconMenuDots size='24' color='#262626' />
            </button>
          </OptionsWrapper>
        </UserInfo>
      </Wrapper>
      <Modal shouldShow={showOptionsPopupMenu} setShouldShow={setShowOptionsPopupMenu} />
    </>
  )
}

export default Post
