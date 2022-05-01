import { IconMenuDots } from '@/presentation/assets/icons'
import React, { useState } from 'react'
import Modal from '../../PopUp'
import { Header, HeaderAvatar, HeaderUserInfo, Location, OptionsWrapper, UserInfo, Username } from './styles'

const PostHeader: React.FC = () => {
  const [showOptionsPopupMenu, setShowOptionsPopupMenu] = useState(false)
  return (
    <>
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
      <Modal shouldShow={showOptionsPopupMenu} setShouldShow={setShowOptionsPopupMenu} />
    </>
  )
}

export default PostHeader
