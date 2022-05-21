import { IconClose } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import Crop from './Crop'
import { CloseButton, Wrapper } from './styles'
import UploadImage from './UploadImage'

interface IModal {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

export interface ISubModal {
  reference: MutableRefObject<any>
  next?: () => void
  previous?: () => void
}

const CreatePost: React.FC<IModal> = ({ shouldShow, setShouldShow }: IModal) => {
  const [position, setPosition] = useState<number>(0)
  const modalRef = useRef(null)

  const previous = (): void => {
    setPosition(position - 1)
  }

  const next = (): void => {
    setPosition(position + 1)
  }

  const tabs: JSX.Element[] = [
    <UploadImage key='upload' reference={modalRef} next={next} />,
    <Crop key='crop' reference={modalRef} previous={previous} next={next} />
  ]

  const closeModel = (): void => {
    setShouldShow(false)
    setTimeout(() => {
      setPosition(0)
    }, 500)
  }

  useOutsideAlerter(modalRef, closeModel)

  useEffect(() => {
    if (shouldShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [shouldShow])

  return (
    <Wrapper data-testid='modal' isVisible={shouldShow}>
      <CloseButton onClick={() => closeModel()}>
        <IconClose size='32' color='#FFF' />
      </CloseButton>
      {tabs[position]}
    </Wrapper>
  )
}

export default CreatePost
