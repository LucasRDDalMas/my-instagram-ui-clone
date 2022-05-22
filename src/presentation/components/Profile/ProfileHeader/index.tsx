import React from 'react'
import { ProfileColumn, ProfileDesktop, ProfileHeaderWrapper, ProfileMobile, ProfileStatusWrapper } from './styles'
import ProfileImage from './components/ProfileImage'
import ProfileStatus from './components/ProfileStatus'
import ProfileNumbers from './components/ProfileNumbers'
import ProfileUserInfo from './components/ProfileInfo'
import ProfileStatusButtons from './components/ProfileStatusButtons'

const ProfileHeader: React.FC = () => {
  return (
    <>
      <ProfileHeaderWrapper>
        <ProfileImage />
        <ProfileColumn>
          <ProfileStatusWrapper>
            <ProfileStatus />
            <ProfileDesktop>
              <ProfileNumbers />
              <ProfileUserInfo />
            </ProfileDesktop>
          </ProfileStatusWrapper>
          <ProfileMobile>
            <ProfileStatusButtons />
          </ProfileMobile>
        </ProfileColumn>
      </ProfileHeaderWrapper>
      <ProfileMobile>
        <ProfileUserInfo />
        <ProfileNumbers />
      </ProfileMobile>
    </>
  )
}

export default ProfileHeader
