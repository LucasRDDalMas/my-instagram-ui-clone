import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { PopUpWrapper, Wrapper } from './styles'

interface IModal {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const SwitchAccountModal: React.FC<IModal> = ({ shouldShow, setShouldShow }: IModal) => {
  const optionModalRef = useRef(null)

  const closeModel = (): void => {

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
    <Wrapper data-testid='modal' shouldShow={shouldShow}>
      <PopUpWrapper ref={optionModalRef}>
      </PopUpWrapper>
    </Wrapper>
  )
}

export default SwitchAccountModal
