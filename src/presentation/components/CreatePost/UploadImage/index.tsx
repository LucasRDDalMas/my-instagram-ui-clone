import { IconMedia } from '@/presentation/assets/icons'
import React from 'react'
import { ISubModal } from '..'
import Title from '../Title'
import { ImageUploadWrapper, UploadArea, UploadButton, UploadTitle } from './styles'

const UploadImage: React.FC<ISubModal> = ({ reference, next }: ISubModal) => {
  return (
    <ImageUploadWrapper ref={reference}>
      <Title title='Create new post' />
      <UploadArea>
        <IconMedia size='77' />
        <UploadTitle>Drag photos and videos here</UploadTitle>
        <UploadButton onClick={() => next()}>Select from computer</UploadButton>
      </UploadArea>
    </ImageUploadWrapper>
  )
}

export default UploadImage
