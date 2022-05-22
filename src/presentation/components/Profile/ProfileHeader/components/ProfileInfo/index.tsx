import React from 'react'
import { ProfileBio, ProfileName, ProfileUserInfoWrapper, ProfileWebSite } from './styles'

const ProfileUserInfo: React.FC = () => {
  return (
    <ProfileUserInfoWrapper>
      <ProfileName>
        Avatar Aang
      </ProfileName>
      <ProfileBio>
        Name:Ang♡Avatar♡<br />Strong<br />Twitter @aang
      </ProfileBio>
      <ProfileWebSite href='https://google.com' target='_blank'>
        https://google.com
      </ProfileWebSite>
    </ProfileUserInfoWrapper>
  )
}

export default ProfileUserInfo
