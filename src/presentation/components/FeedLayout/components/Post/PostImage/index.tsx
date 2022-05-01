import { IconLeftArrow, IconRightArrow } from '@/presentation/assets/icons'
import { LeftIcon, RightIcon } from '@/presentation/components/shared/styles'
import React, { useState } from 'react'
import { Image, Wrapper } from './styles'

const PostImage: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const photos = [];

  [...Array(5)].map((x, i) =>
    photos.push(
      <Image key={i}>
        <img src='https://picsum.photos/500' alt='' />
      </Image>
    )
  )

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
        <LeftIcon onClick={() => slide(-1)}>
          <IconLeftArrow size='24' />
        </LeftIcon>
      )}

      {current !== length && (
        <RightIcon onClick={() => slide(1)}>
          <IconRightArrow size='24' />
        </RightIcon>
      )}

      {photos.map((photo, index) => {
        return <div key={index} className={index === current ? 'slide active' : 'slide'}>
         {index === current && photo}
        </div>
      })}
    </Wrapper>
  )
}

export default PostImage
