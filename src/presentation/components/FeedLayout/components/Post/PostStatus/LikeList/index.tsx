import { IconClose } from '@/presentation/assets/icons'
import { FollowButton, FollowingButton, UserAvatar, UserInfo, UserInfoName, UserInfoUsername } from '@/presentation/components/shared/styles'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useRef, useEffect } from 'react'
import { CloseButton, CloseWrapper, PopUpWrapper, Title, User, UserList, Wrapper } from './styles'

interface ILikeList {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const LikeList: React.FC<ILikeList> = ({ shouldShow, setShouldShow }: ILikeList) => {
  const optionModalRef = useRef(null)

  const closeModel = (): void => {
    setShouldShow(false)
  }

  /* istanbul ignore next */
  useOutsideAlerter(optionModalRef, closeModel)

  useEffect(() => {
    if (shouldShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [shouldShow])

  return (
    <Wrapper className={shouldShow ? 'show' : ''} data-testid='like-list-wrapper'>
      <PopUpWrapper ref={optionModalRef}>
        <Title>
          Likes
          <CloseWrapper onClick={() => closeModel()} data-testid='like-list-close-button'>
            <CloseButton>
              <IconClose size='24' />
            </CloseButton>
          </CloseWrapper>
        </Title>
        <UserList>
          <User>
            <UserAvatar>
              <img src='https://picsum.photos/200' alt='username' />
            </UserAvatar>
            <UserInfo>
              <UserInfoUsername>username</UserInfoUsername>
              <UserInfoName>name</UserInfoName>
            </UserInfo>
            <FollowingButton>
              Following
            </FollowingButton>
          </User>
          <User>
            <UserAvatar>
              <img src='https://picsum.photos/200' alt='username' />
            </UserAvatar>
            <UserInfo>
              <UserInfoUsername>username</UserInfoUsername>
              <UserInfoName>name</UserInfoName>
            </UserInfo>
            <FollowButton>
              Follow
            </FollowButton>
          </User>
        </UserList>
      </PopUpWrapper>
    </Wrapper>
  )
}

export default LikeList
