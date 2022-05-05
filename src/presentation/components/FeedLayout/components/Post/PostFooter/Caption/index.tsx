import React, { useEffect, useState } from 'react'
import { CaptionText, CaptionWrapper, More, User } from './styles'

interface ICaption {
  caption: string
}

const Caption: React.FC<ICaption> = ({ caption }: ICaption) => {
  const [currentCaption, setCurrentCaption] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(true)

  const getSubCaption = (captionText: string): string => {
    return captionText.substring(0, 120).trim().concat('... ')
  }

  const collapseCaption = (captionText: string): void => {
    if (captionText.indexOf('<br />') > 0) {
      setCurrentCaption(getSubCaption(captionText.split('<br />')[0]))
    } else if (captionText.length > 120) {
      setCurrentCaption(getSubCaption(captionText))
    } else {
      setShowMore(false)
      setCurrentCaption(captionText)
    }
  }

  const showMoreCaption = (): void => {
    setShowMore(false)
    setCurrentCaption(caption)
  }

  useEffect(() => {
    collapseCaption(caption)
  }, [])

  return (
    <>
      <CaptionWrapper>
        <CaptionText>
          <User href="">avatar</User>&nbsp;<span data-testid='caption' dangerouslySetInnerHTML={{ __html: currentCaption }} />{showMore && <More onClick={showMoreCaption} data-testid='more-button'>more</More>}
        </CaptionText>
      </CaptionWrapper>
    </>
  )
}

export default Caption
