import { IconGrid, IconPlay, IconUserPin } from '@/presentation/assets/icons'
import React from 'react'
import { ProfileNavWrapper, ProfileNavItem, ProfileNavItemText } from './styles'

const ProfileNav: React.FC = () => {
  return (
    <ProfileNavWrapper>
      <ProfileNavItem isActive={true}>
        <IconGrid size='18' />
        <ProfileNavItemText>Posts</ProfileNavItemText>
      </ProfileNavItem>
      <ProfileNavItem isActive={false}>
        <IconPlay size='18' />
        <ProfileNavItemText>Videos</ProfileNavItemText>
      </ProfileNavItem>
      <ProfileNavItem isActive={false}>
        <IconUserPin size='18' />
        <ProfileNavItemText>Tagged</ProfileNavItemText>
      </ProfileNavItem>
    </ProfileNavWrapper>
  )
}

export default ProfileNav
