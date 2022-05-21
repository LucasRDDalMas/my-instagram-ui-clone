import { IconVerified } from '@/presentation/assets/icons'
import { Header } from '@/presentation/components'

import React from 'react'
import { ProfileImageWrapper, ProfileHeader, ProfileWrapper, ProfileImage, ProfileStatus, ProfileStatusWrapper, ProfileUsername, Verified } from './styles'

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <ProfileWrapper>
        <ProfileHeader>
          <ProfileImageWrapper>
            <ProfileImage src='https://picsum.photos/500' alt='' />
          </ProfileImageWrapper>
          <ProfileStatusWrapper>
            <ProfileStatus>
              <ProfileUsername>aang</ProfileUsername>
              <Verified>
                <IconVerified size='18' color='#0095f6' />
              </Verified>
            </ProfileStatus>
          </ProfileStatusWrapper>
        </ProfileHeader>
      </ProfileWrapper>
    </>
  )
}

export default Profile
