import { IconClose } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import Crop from './Crop'
import { CloseButton, Wrapper } from './styles'
import UploadImage from './UploadImage'

interface IModal {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const CreatePost: React.FC<IModal> = ({ shouldShow, setShouldShow }: IModal) => {
  const modalRef = useRef(null)

  const closeModel = (): void => {
    setShouldShow(false)
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
      <UploadImage reference={modalRef} />
      <Crop reference={modalRef} />
    </Wrapper>
  )
}

export default CreatePost
