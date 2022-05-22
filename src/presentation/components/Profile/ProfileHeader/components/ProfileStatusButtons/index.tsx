import { IconDown, IconUserCheck } from '@/presentation/assets/icons'
import React from 'react'
import { Button, ButtonFollow, ButtonSuggestion, Wrapper } from './styles'

const ProfileStatusButtons: React.FC = () => {
  return (
    <Wrapper>
      <Button>Message</Button>
      <ButtonFollow><IconUserCheck size='16' /></ButtonFollow>
      <ButtonSuggestion><IconDown size='16' /></ButtonSuggestion>
    </Wrapper>
  )
}

export default ProfileStatusButtons
