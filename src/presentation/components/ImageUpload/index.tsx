import { IconClose, IconMedia } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { CloseButton, PopUpWrapper, Title, UploadArea, UploadButton, UploadTitle, Wrapper } from './styles'

interface IModal {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const ImageUpload: React.FC<IModal> = ({ shouldShow, setShouldShow }: IModal) => {
  const optionModalRef = useRef(null)

  const closeModel = (): void => {
    setShouldShow(false)
  }

  useOutsideAlerter(optionModalRef, closeModel)

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
      <PopUpWrapper ref={optionModalRef}>
        <Title>
          Create new post
        </Title>
        <UploadArea>
          <IconMedia size='77' />
          <UploadTitle>Drag photos and videos here</UploadTitle>
          <UploadButton>Select from computer</UploadButton>
        </UploadArea>
      </PopUpWrapper>
    </Wrapper>
  )
}

export default ImageUpload
