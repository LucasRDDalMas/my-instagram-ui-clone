import React from 'react'
import { ProfileHeaderWrapper, ProfileStatusWrapper } from './styles'
import ProfileImage from './components/ProfileImage'
import ProfileStatus from './components/ProfileStatus'
import ProfileNumbers from './components/ProfileNumbers'
import ProfileUserInfo from './components/ProfileInfo'

const ProfileHeader: React.FC = () => {
  return (
    <ProfileHeaderWrapper>
      <ProfileImage />
      <ProfileStatusWrapper>
        <ProfileStatus />
        <ProfileNumbers />
        <ProfileUserInfo />
      </ProfileStatusWrapper>
    </ProfileHeaderWrapper>
  )
}

export default ProfileHeader
