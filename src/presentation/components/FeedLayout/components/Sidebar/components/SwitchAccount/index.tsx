import React from 'react'
import { Avatar, AvatarImage, Name, Switch, SwitchButton, UserInfo, Username, UsernameLink, Wrapper } from './styles'

const SwitchAccount: React.FC = () => {
  return (
    <Wrapper>
      <Avatar href=''>
        <AvatarImage src='https://picsum.photos/200' alt='' />
      </Avatar>
      <UserInfo>
        <Username>
          <UsernameLink>avatar</UsernameLink>
        </Username>
        <Name>Aang</Name>
      </UserInfo>
      <Switch>
        <SwitchButton>Switch</SwitchButton>
      </Switch>
    </Wrapper>
  )
}

export default SwitchAccount
