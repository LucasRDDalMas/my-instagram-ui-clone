import { IconMedia } from '@/presentation/assets/icons'
import React, { MutableRefObject } from 'react'
import { Title } from '../styles'
import { ImageUploadWrapper, UploadArea, UploadButton, UploadTitle } from './styles'

interface IModal {
  reference: MutableRefObject<any>
}

const UploadImage: React.FC<IModal> = ({ reference }: IModal) => {
  return (
    <ImageUploadWrapper ref={reference}>
      <Title>
        Create new post
      </Title>
      <UploadArea>
        <IconMedia size='77' />
        <UploadTitle>Drag photos and videos here</UploadTitle>
        <UploadButton>Select from computer</UploadButton>
      </UploadArea>
    </ImageUploadWrapper>
  )
}

export default UploadImage
