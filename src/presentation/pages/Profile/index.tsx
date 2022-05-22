
import { Header } from '@/presentation/components'
import ProfileHeader from '@/presentation/components/Profile/ProfileHeader'

import React from 'react'
import { ProfileWrapper } from './styles'

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <ProfileWrapper>
        <ProfileHeader />
      </ProfileWrapper>
    </>
  )
}

export default Profile
