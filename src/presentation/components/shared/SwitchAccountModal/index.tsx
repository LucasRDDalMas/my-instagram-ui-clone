import { IconClose, IconVerified } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { Account, AccountAvatar, AccountUsername, ActualAccountIcon, CloseButton, CloseWrapper, LoginLink, PopUpWrapper, Title, Wrapper } from './styles'

interface IModal {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const SwitchAccountModal: React.FC<IModal> = ({ shouldShow, setShouldShow }: IModal) => {
  const optionModalRef = useRef(null)

  const close = (): void => setShouldShow(false)

  useOutsideAlerter(optionModalRef, close)

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
        <Title>
          Switch Accounts
          <CloseWrapper data-testid='share-close' onClick={() => close()}>
            <CloseButton>
              <IconClose size='24' />
            </CloseButton>
          </CloseWrapper>
        </Title>
        <Account>
          <AccountAvatar>
            <img src='https://picsum.photos/500' alt='' />
          </AccountAvatar>
          <AccountUsername>aang</AccountUsername>
          <ActualAccountIcon>
            <IconVerified size='24' color='#0095f6' />
          </ActualAccountIcon>
        </Account>
        <Account>
          <AccountAvatar>
            <img src='https://picsum.photos/500' alt='' />
          </AccountAvatar>
          <AccountUsername>aang</AccountUsername>
        </Account>

        <LoginLink href=''>
          Log into an Existing Account
        </LoginLink>
      </PopUpWrapper>
    </Wrapper>
  )
}

export default SwitchAccountModal
