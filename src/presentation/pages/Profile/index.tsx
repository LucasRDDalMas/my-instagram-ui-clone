
import { Header } from '@/presentation/components'
import ProfileHeader from '@/presentation/components/Profile/ProfileHeader'
import ProfileNav from '@/presentation/components/Profile/ProfileMenu'
import ProfilePosts from '@/presentation/components/Profile/ProfilePosts'
import Footer from '@/presentation/components/SignUpLayout/components/Footer'

import React from 'react'
import { ProfileWrapper } from './styles'

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <ProfileWrapper>
        <ProfileHeader />
        <ProfileNav />
        <ProfilePosts />
      </ProfileWrapper>
      <Footer />
    </>
  )
}

export default Profile
