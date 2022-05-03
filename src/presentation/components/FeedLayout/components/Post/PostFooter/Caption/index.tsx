
import { postMock } from '@/constants/mock-post'
import React, { useEffect, useState } from 'react'
import { CaptionText, CaptionWrapper, More, User } from './styles'

const Caption: React.FC = () => {
  const [caption, setCaption] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(true)

  const captionText = postMock

  const getSubCaption = (caption: string): string => {
    return caption.substring(0, 120).trim().concat('... ')
  }

  const collapseCaption = (caption: string): void => {
    if (caption.indexOf('<br />') > 0) {
      setCaption(getSubCaption(caption.split('<br />')[0]))
    } else if (caption.length > 120) {
      setCaption(getSubCaption(caption))
    } else {
      setShowMore(false)
      setCaption(caption)
    }
  }

  const showMoreCaption = (): void => {
    setShowMore(false)
    setCaption(captionText)
  }

  useEffect(() => {
    collapseCaption(captionText)
  }, [])

  return (
    <>
      <CaptionWrapper>
        <CaptionText>
          <User href="">avatar</User>&nbsp;<span dangerouslySetInnerHTML={{ __html: caption }} />{showMore && <More onClick={showMoreCaption}>more</More>}
        </CaptionText>
      </CaptionWrapper>
    </>
  )
}

export default Caption
