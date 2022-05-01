
import { IconBookmark, IconComment, IconHeart, IconSend } from '@/presentation/assets/icons'
import React, { useState } from 'react'
import LikeList from './LikeList'
import { ButtonIcon, IconsBox, Likes, LikesLink, Wrapper } from './styles'

const PostStatus: React.FC = () => {
  const [showLikes, setShowLikes] = useState(false)

  return (
    <>
      <Wrapper>
        <IconsBox>
          <ButtonIcon>
            <IconHeart size='24' />
          </ButtonIcon>
          <ButtonIcon>
            <IconComment size='24' className='flip' />
          </ButtonIcon>
          <ButtonIcon>
            <IconSend size='24' />
          </ButtonIcon>
        </IconsBox >

        <ButtonIcon>
          <IconBookmark size='24' />
        </ButtonIcon>
      </Wrapper >
      <Likes>
        <LikesLink onClick={() => setShowLikes(true)}>
          2,678 likes
        </LikesLink>
      </Likes>
      <LikeList shouldShow={showLikes} setShouldShow={setShowLikes} />
    </>
  )
}

export default PostStatus
