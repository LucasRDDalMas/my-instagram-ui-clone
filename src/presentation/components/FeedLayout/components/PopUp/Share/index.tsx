import { IconClose, IconEmail, IconFacebook, IconLink, IconMessenger, IconSend, IconTwitter } from '@/presentation/assets/icons'
import React from 'react'
import { CloseButton, CloseWrapper, Icon, Option, OptionText, Title } from './styles'

interface IShare {
  close: () => void
}

const Share: React.FC<IShare> = ({ close }: IShare) => {
  return (
    <>
      <Title>
        Share To...
        <CloseWrapper data-testid='share-close' onClick={() => close()}>
          <CloseButton>
            <IconClose size='24' />
          </CloseButton>
        </CloseWrapper>
      </Title>
      <Option>
        <Icon>
          <IconSend size='24' />
        </Icon>
        <OptionText>
          Share to Direct
        </OptionText>
      </Option>
      <Option>
        <Icon>
          <IconFacebook size='24' />
        </Icon>
        <OptionText>
          Share to Facebook
        </OptionText>
      </Option>
      <Option>
        <Icon>
          <IconMessenger size='24' />
        </Icon>
        <OptionText>
          Share to Messenger
        </OptionText>
      </Option>
      <Option>
        <Icon>
          <IconTwitter size='24' />
        </Icon>
        <OptionText>
          Share to Twitter
        </OptionText>
      </Option>
      <Option>
        <Icon>
          <IconEmail size='24' />
        </Icon>
        <OptionText>
          Share via E-mail
        </OptionText>
      </Option>
      <Option>
        <Icon>
          <IconLink size='24' />
        </Icon>
        <OptionText>
          Copy Link
        </OptionText>
      </Option>
      <Option data-testid='share-cancel' onClick={() => close()}>
        <Icon />
        <OptionText>
          Cancel
        </OptionText>
      </Option>
    </>
  )
}

export default Share
