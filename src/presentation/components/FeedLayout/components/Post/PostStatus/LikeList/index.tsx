import { IconClose } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { CloseButton, CloseWrapper, FollowButton, FollowingButton, PopUpWrapper, Title, UserAvatar, UserInfo, UserInfoName, UserInfoUsername, UserList, UserWrapper, Wrapper } from './styles'

type Props = {
  setShouldShow: Dispatch<SetStateAction<boolean>>
  shouldShow: boolean
}

const LikeList: React.FC<Props> = ({ shouldShow, setShouldShow }: Props) => {
  const optionModalRef = useRef(null)

  const closeModel = (): void => {
    setShouldShow(false)
  }

  useOutsideAlerter(optionModalRef, closeModel)

  return (
    <Wrapper className={shouldShow ? 'show' : ''}>
      <PopUpWrapper ref={optionModalRef}>
        <Title>
          Likes
          <CloseWrapper onClick={() => closeModel()}>
            <CloseButton>
              <IconClose size='24' />
            </CloseButton>
          </CloseWrapper>
        </Title>
        <UserList>
          {[...Array(3)].map((x, i) =>
            <UserWrapper key={i}>
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
            </UserWrapper>
          )}
          {[...Array(15)].map((x, i) =>
            <UserWrapper key={i}>
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
            </UserWrapper>
          )}
        </UserList>
      </PopUpWrapper>
    </Wrapper>
  )
}

export default LikeList
