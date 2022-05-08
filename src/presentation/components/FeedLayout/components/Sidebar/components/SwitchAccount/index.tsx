import SwitchAccountModal from '@/presentation/components/shared/SwitchAccountModal'
import React, { useState } from 'react'
import { Avatar, AvatarImage, Name, Switch, SwitchButton, UserInfo, Username, UsernameLink, Wrapper } from './styles'

const SwitchAccount: React.FC = () => {
  const [shouldShow, setShouldShow] = useState<boolean>(false)

  return (
    <>
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
        <Switch onClick={() => setShouldShow(true)}>
          <SwitchButton>Switch</SwitchButton>
        </Switch>
        <SwitchAccountModal shouldShow={shouldShow} setShouldShow={setShouldShow} />
      </Wrapper>
    </>
  )
}

export default SwitchAccount
