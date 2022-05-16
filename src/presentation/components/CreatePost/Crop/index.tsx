import { IconImages } from '@/presentation/assets/icons'
import React, { MutableRefObject } from 'react'
import { Title } from '../styles'
import { Image, ImageUploadWrapper, Option, OptionButton } from './styles'

interface IModal {
  reference: MutableRefObject<any>
}

const Crop: React.FC<IModal> = ({ reference }: IModal) => {
  return (
    <ImageUploadWrapper ref={reference}>
      <Title>
        Crop
      </Title>
      <Image>
        <Option>
          <OptionButton>
            <IconImages size='14' width='14' height='14' color='#FFF' />
          </OptionButton>
        </Option>
      </Image>
    </ImageUploadWrapper>
  )
}

export default Crop
