
import React, { useEffect, useState } from 'react'
import { CaptionText, CaptionWrapper, More, User } from './styles'

const Caption: React.FC = () => {
  const [caption, setCaption] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(true)

  const captionText = '3度の失敗を経て、詐欺じゃない韓国通販サ\nイトで買えました3度の失敗を経て、詐欺じゃない韓国通販サイトで買えました 3度の失敗を経て、詐欺じゃない韓国通販サイトで買えました 3度の失敗を経て、詐欺じゃない韓国通販サイトで買えました 3度の失敗を経て、詐欺じゃない韓国通販サイトで買えました'

  const collapseCaption = (caption: string): void => {
    const more = '... '
    if (caption.indexOf('\n') > 0) {
      setCaption(caption.split('\n')[0].concat(more))
    } else if (caption.length > 115) {
      setCaption(caption.substring(0, 115).trim().concat(more))
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
    console.log(showMore)
    collapseCaption(captionText)
  }, [])

  return (
    <>
      <CaptionWrapper>
        <CaptionText>
          <User href="">avatar</User>&nbsp;{caption} {showMore && <More onClick={showMoreCaption}>more</More>}
        </CaptionText>
      </CaptionWrapper>
    </>
  )
}

export default Caption
