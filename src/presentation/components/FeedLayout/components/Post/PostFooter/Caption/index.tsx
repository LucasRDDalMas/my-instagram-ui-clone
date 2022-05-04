
import { postMock } from '@/constants/mock-post'
import React, { useEffect, useState } from 'react'
import { CaptionText, CaptionWrapper, More, User } from './styles'

const Caption: React.FC = () => {
  const [caption, setCaption] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(true)

  const getSubCaption = (captionText: string): string => {
    return captionText.substring(0, 120).trim().concat('... ')
  }

  const collapseCaption = (captionText: string): void => {
    if (captionText.indexOf('<br />') > 0) {
      setCaption(getSubCaption(captionText.split('<br />')[0]))
    } else if (captionText.length > 120) {
      setCaption(getSubCaption(captionText))
    } else {
      setShowMore(false)
      setCaption(captionText)
    }
  }

  const showMoreCaption = (): void => {
    setShowMore(false)
    setCaption(postMock)
  }

  useEffect(() => {
    collapseCaption(postMock)
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
