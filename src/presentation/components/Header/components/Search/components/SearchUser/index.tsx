import React from 'react'
import { SearchUserWrapper, SearchUserAvatar, SearchUserInfo, SearchUserInfoName, SearchUserInfoUsername } from './styles'

interface ISearchUser {
  hasStory: boolean
  avatar: string
  username: string
  name: string
}

const SearchUser: React.FC<ISearchUser> = ({ hasStory, avatar, username, name }: ISearchUser) => {
  return (
    <SearchUserWrapper>
      <SearchUserAvatar>
        {hasStory && <canvas height="54" width="54" />}
        <img src={avatar} alt={username} />
      </SearchUserAvatar>
      <SearchUserInfo>
        <SearchUserInfoUsername>{username}</SearchUserInfoUsername>
        <SearchUserInfoName>{name}</SearchUserInfoName>
      </SearchUserInfo>
    </SearchUserWrapper>
  )
}

export default SearchUser
