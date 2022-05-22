import { IconMenuDots, IconVerified } from '@/presentation/assets/icons'
import React from 'react'
import ProfileStatusButtons from '../ProfileStatusButtons'
import { Options, ProfileStatusButtonsWrapper, ProfileStatusWrapper, ProfileUsername, Verified } from './styles'

const ProfileStatus: React.FC = () => {
  return (
    <ProfileStatusWrapper>
      <ProfileUsername>aang</ProfileUsername>
      <Verified>
        <IconVerified size='18' color='#0095f6' />
      </Verified>
      <ProfileStatusButtonsWrapper>
        <ProfileStatusButtons />
      </ProfileStatusButtonsWrapper>
      <Options>
        <IconMenuDots size='24' />
      </Options>
    </ProfileStatusWrapper>
  )
}

export default ProfileStatus
