import { IconExpand, IconImages, IconZoom } from '@/presentation/assets/icons'
import React, { MutableRefObject } from 'react'
import { Title } from '../styles'
import { Image, ImageUploadWrapper, ImageZoomOptions, MultipleImageOption, Option, OptionButton } from './styles'

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
        <ImageZoomOptions>
          <Option>
            <OptionButton>
              <IconExpand size='14' width='14' height='14' color='#FFF' />
            </OptionButton>
          </Option>
          <Option>
            <OptionButton>
              <IconZoom size='14' width='14' height='14' color='#FFF' />
            </OptionButton>
          </Option>
        </ImageZoomOptions>
        <MultipleImageOption>
          <OptionButton>
            <IconImages size='14' width='14' height='14' color='#FFF' />
          </OptionButton>
        </MultipleImageOption>
      </Image>
    </ImageUploadWrapper>
  )
}

export default Crop
