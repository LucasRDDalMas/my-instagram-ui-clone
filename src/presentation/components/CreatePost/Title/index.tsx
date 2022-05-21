import { IconBackArrow } from '@/presentation/assets/icons'
import React from 'react'
import { NextButton, PreviousButton, TitleText, TitleWrapper } from './styles'

interface ITitle {
  title: string
  next?: () => void
  previous?: () => void
}

const Title: React.FC<ITitle> = ({ title, next, previous }: ITitle) => {
  return (
    <TitleWrapper>
      { previous &&
        <PreviousButton onClick={() => previous()}>
          <IconBackArrow size='24' />
        </PreviousButton>
      }
      <TitleText>{title}</TitleText>
      { next &&
        <NextButton onClick={() => next()}>Next</NextButton>
      }
    </TitleWrapper>
  )
}

export default Title
