import React from 'react'
import {
  FollowLink,
  SeeAllLink,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserInfoUsername,
  UserWrapper
} from '@/presentation/components/shared/styles'
import { Title, TitleWrapper, Wrapper } from './styles'

const SuggestionList: React.FC = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Suggestions For You</Title>
        <SeeAllLink>
          See All
        </SeeAllLink>
      </TitleWrapper>
      <UserWrapper>
        <UserAvatar>
          <img src="https://picsum.photos/200" alt="username" />
        </UserAvatar>
        <UserInfo>
          <UserInfoUsername>username</UserInfoUsername>
          <UserInfoName>name</UserInfoName>
        </UserInfo>
        <FollowLink>Follow</FollowLink>
      </UserWrapper>
    </Wrapper>
  )
}

export default SuggestionList
