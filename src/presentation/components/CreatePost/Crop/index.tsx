import { IconExpand, IconImages, IconRatio11, IconRatio169, IconRatio45, IconRatioOriginal, IconZoom } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { useRef, useState } from 'react'
import { ISubModal } from '..'
import Title from '../Title'
import { Image, ImageUploadWrapper, ImageZoomOptions, MultipleImageOption, Option, OptionButton, Ratio, RatioButton, RatioIcon, RatioText, SlideRange, Zoom } from './styles'

const Crop: React.FC<ISubModal> = ({ reference, next, previous }: ISubModal) => {
  const [showRatio, setShowRatio] = useState<boolean>(false)
  const ratioReference = useRef(null)

  const [showZoom, setShowZoom] = useState<boolean>(false)
  const zoomReference = useRef(null)

  const [zoom, setZoom] = useState<string>('1')

  useOutsideAlerter(ratioReference, () => setShowRatio(false))
  useOutsideAlerter(zoomReference, () => setShowZoom(false))

  return (
    <ImageUploadWrapper ref={reference}>
      <Title title='Crop' next={next} previous={previous} />
      <Image>
        <ImageZoomOptions>
          <Option>
            <OptionButton onClick={() => setShowRatio(!showRatio)} ref={ratioReference}>
              <IconExpand size='14' width='14' height='14' color='#FFF' />
              <Ratio shouldShow={showRatio}>
                <RatioButton>
                  <RatioText>Original</RatioText>
                  <RatioIcon>
                    <IconRatioOriginal size='24' color='#8e8e8e' />
                  </RatioIcon>
                </RatioButton>

                <RatioButton>
                  <RatioText>1:1</RatioText>
                  <RatioIcon>
                    <IconRatio11 size='24' color='#8e8e8e' />
                  </RatioIcon>
                </RatioButton>

                <RatioButton>
                  <RatioText>4:5</RatioText>
                  <RatioIcon>
                    <IconRatio45 size='24' color='#8e8e8e' />
                  </RatioIcon>
                </RatioButton>

                <RatioButton>
                  <RatioText>16:9</RatioText>
                  <RatioIcon>
                    <IconRatio169 size='24' color='#8e8e8e' />
                  </RatioIcon>
                </RatioButton>
              </Ratio>
            </OptionButton>
          </Option>
          <Option>
            <OptionButton onClick={() => setShowZoom(!showZoom)}>
              <IconZoom size='14' width='14' height='14' color='#FFF' />
              <Zoom shouldShow={showZoom} ref={zoomReference}>
                <SlideRange
                  type="range"
                  min="1"
                  max="10"
                  value={zoom}
                  onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    setZoom(event.currentTarget.value)
                  }}
                />
              </Zoom>
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
