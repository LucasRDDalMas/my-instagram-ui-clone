import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import Embed from './Embed'
import Options from './Options'
import Report from './Report'
import Share from './Share'
import { PopUpWrapper, Wrapper } from './styles'
import Unfollow from './Unfollow'

type Props = {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const Modal: React.FC<Props> = ({ shouldShow, setShouldShow }: Props) => {
  const optionModalRef = useRef(null)

  const [showOptions, setShowOptions] = useState(true)
  const [showShare, setShowShare] = useState(false)
  const [showEmbed, setShowEmbed] = useState(false)
  const [showUnfollow, setShowUnfollow] = useState(false)
  const [showReport, setShowReport] = useState(false)

  const closeModel = (): void => {
    setShouldShow(false)
    setShowShare(false)
    setShowEmbed(false)
    setShowUnfollow(false)
    setShowReport(false)
    setTimeout(() => {
      setShowOptions(true)
    }, 500)
  }

  useOutsideAlerter(optionModalRef, closeModel)

  return (
    <Wrapper className={shouldShow ? 'show' : ''}>
      <PopUpWrapper ref={optionModalRef}>
        {showOptions && (
          <Options
            share={() => {
              setShowOptions(false)
              setShowShare(true)
            }}
            embed={() => {
              setShowOptions(false)
              setShowEmbed(true)
            }}
            unfollow={() => {
              setShowOptions(false)
              setShowUnfollow(true)
            }}
            report={() => {
              setShowOptions(false)
              setShowReport(true)
            }}
          />
        )}
        {showShare && <Share close={closeModel} />}
        {showEmbed && <Embed />}
        {showUnfollow && <Unfollow close={closeModel} />}
        {showReport && <Report close={closeModel} />}
      </PopUpWrapper>
    </Wrapper>
  )
}

export default Modal
