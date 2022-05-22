import { IconDown, IconMenuDots, IconUserCheck, IconVerified } from '@/presentation/assets/icons'
import React from 'react'
import { Button, ButtonFollow, ButtonSuggestion, Options, ProfileStatusWrapper, ProfileUsername, Verified } from './styles'

const ProfileStatus: React.FC = () => {
  return (
    <ProfileStatusWrapper>
      <ProfileUsername>aang</ProfileUsername>
      <Verified>
        <IconVerified size='18' color='#0095f6' />
      </Verified>
      <Button>Message</Button>
      <ButtonFollow><IconUserCheck size='16' /></ButtonFollow>
      <ButtonSuggestion><IconDown size='16' /></ButtonSuggestion>
      <Options>
        <IconMenuDots size='24' />
      </Options>
    </ProfileStatusWrapper>
  )
}

export default ProfileStatus
