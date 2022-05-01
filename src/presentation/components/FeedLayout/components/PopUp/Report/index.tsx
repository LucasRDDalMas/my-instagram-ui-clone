import { IconClose, IconNext } from '@/presentation/assets/icons'
import React from 'react'
import { CloseButton, CloseWrapper, Icon, Option, OptionText, Header, Title } from './styles'

type Props = {
  close: () => void
}

const Report: React.FC<Props> = ({ close }: Props) => {
  return (
    <>
      <Header>
        Report
        <CloseWrapper onClick={() => close()}>
          <CloseButton>
            <IconClose size='24' />
          </CloseButton>
        </CloseWrapper>
      </Header>

      <Title>Why are you reporting this post?</Title>

      <Option>
        <OptionText>
          It&apos;s Span
        </OptionText>
        <Icon>
          <IconNext size='24' />
        </Icon>
      </Option>
      <Option>
        <OptionText>
          Nudity or sexual activity
        </OptionText>
        <Icon>
          <IconNext size='24' />
        </Icon>
      </Option>

      <Option onClick={() => close()}>
        <OptionText>
          Cancel
        </OptionText>
      </Option>
    </>
  )
}

export default Report
