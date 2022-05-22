import React from 'react'
import { ProfileImageWrapper, ProfileImageBorder, Image } from './styles'

const ProfileImage: React.FC = () => {
  return (
    <ProfileImageWrapper>
      <ProfileImageBorder>
        <Image src='https://picsum.photos/500' alt='' />
      </ProfileImageBorder>
    </ProfileImageWrapper>
  )
}

export default ProfileImage
