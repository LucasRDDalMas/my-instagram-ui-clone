import { IconLeftArrow, IconRightArrow } from '@/presentation/assets/icons'
import { LeftIcon, RightIcon } from '@/presentation/components/shared/styles'
import React, { useEffect, useRef, useState } from 'react'
import { Scroll, UserAvatar, UserStory, UserUsername, Wrapper } from './styles'

const Story: React.FC = () => {
  const [scrollStart, setScrollStart] = useState<boolean>(false)
  const [scrollEnd, setScrollEnd] = useState<boolean>(false)

  const slideRef = useRef<HTMLDivElement>(null)

  const slide = (shift: number): void => {
    slideRef.current.scrollLeft += shift
  }

  const checkScroll = (): void => {
    if (slideRef.current.scrollLeft === 0) {
      setScrollStart(false)
    } else if (!scrollStart) {
      setScrollStart(true)
    }

    if (
      Math.floor(slideRef.current.scrollWidth - slideRef.current.scrollLeft) <=
      slideRef.current.offsetWidth
    ) {
      setScrollEnd(false)
    } else {
      setScrollEnd(true)
    }
  }

  useEffect(() => {
    checkScroll()
  }, [])

  return (
    <Wrapper>
      { scrollStart && (
        <LeftIcon onClick={() => slide(-300)}>
          <IconLeftArrow size='24' />
        </LeftIcon>
      ) }

      { scrollEnd && (
        <RightIcon onClick={() => slide(300)}>
          <IconRightArrow size='24' />
        </RightIcon>
      ) }

      <Scroll ref={slideRef} onScroll={checkScroll}>
        {[...Array(30)].map((x, i) =>
          <UserStory key={i}>
            <UserAvatar className='story'>
              <img src='https://picsum.photos/500' />
            </UserAvatar>
            <UserUsername>avatar{i}</UserUsername>
          </UserStory>
        )}
      </Scroll>
    </Wrapper>
  )
}

export default Story
