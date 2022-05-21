import { IconExpand, IconImages, IconZoom } from '@/presentation/assets/icons'
import React from 'react'
import { ISubModal } from '..'
import Title from '../Title'
import { Image, ImageUploadWrapper, ImageZoomOptions, MultipleImageOption, Option, OptionButton } from './styles'

const Crop: React.FC<ISubModal> = ({ reference, next, previous }: ISubModal) => {
  return (
    <ImageUploadWrapper ref={reference}>
      <Title title='Crop' next={next} previous={previous} />
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
