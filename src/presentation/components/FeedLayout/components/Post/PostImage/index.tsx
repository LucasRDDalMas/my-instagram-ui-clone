import { IconLeftArrow, IconRightArrow } from '@/presentation/assets/icons'
import { LeftIcon, RightIcon } from '@/presentation/components/shared/styles'
import React, { useState } from 'react'
import { Image, ImageCarouselList, ImageCarouselListItem, ImageWrapper, Wrapper } from './styles'

type Type = {
  photos?: string[]
}

const PostImage: React.FC<Type> = ({ photos }: Type) => {
  const [current, setCurrent] = useState(0)

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null
  }

  const length = photos.length - 1

  const slide = (shift: number): void => {
    setCurrent(current + shift)
  }

  return (
    <Wrapper>
      {current !== 0 && (
        <LeftIcon onClick={() => slide(-1)} data-testid='left-button' >
          <IconLeftArrow size='24' />
        </LeftIcon>
      )}

      {current !== length && (
        <RightIcon onClick={() => slide(1)} data-testid='right-button'>
          <IconRightArrow size='24' />
        </RightIcon>
      )}

      {photos.map((photo, index) => {
        return <ImageWrapper
          key={index}
          className={index === current ? 'slide active' : 'slide'}
          data-testid='photos'
        >
          {index === current && (
            <Image key={index}>
              <img src={photo} alt='' />
            </Image>
          )}
        </ImageWrapper>
      })}
      <ImageCarouselList data-testid='image-carousel-icon'>
        {photos.map((_photo, index) => {
          return <ImageCarouselListItem
              key={index}
              className={index === current ? 'active' : ''}
            />
        })}
      </ImageCarouselList>
    </Wrapper>
  )
}

export default PostImage
