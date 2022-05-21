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
  const [showUploadImage, setShowUploadImage] = useState<boolean>(true)
  const [showCrop, setShowCrop] = useState<boolean>(false)
  const modalRef = useRef(null)

  const closeModel = (): void => {
    setShouldShow(false)
    setShowCrop(false)
    setTimeout(() => {
      setShowUploadImage(true)
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
      {showUploadImage &&
        <UploadImage
          reference={modalRef}
          next={() => {
            setShowUploadImage(false)
            setShowCrop(true)
          }}
        />
      }
      {showCrop &&
        <Crop
          reference={modalRef}
          previous={() => {
            setShowCrop(false)
            setShowUploadImage(true)
          }}
          next={() => {
            setShowCrop(false)
          }}
        />
      }
    </Wrapper>
  )
}

export default CreatePost
