import React from 'react'
import { ProfilePost, ProfilPostsWrapper } from './styles'

const ProfilePosts: React.FC = () => {
  return (
    <ProfilPostsWrapper>
      {[...Array(30)].map((_x, i) =>
        <ProfilePost key={i}>
          <img src='https://picsum.photos/500' />
        </ProfilePost>
      )}
    </ProfilPostsWrapper>
  )
}

export default ProfilePosts
