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
      <SearchUserAvatar data-testid='search-user-avatar' hasStory={hasStory}>
        <img src={avatar} alt={username} />
      </SearchUserAvatar>
      <SearchUserInfo>
        <SearchUserInfoUsername data-testid='search-user-username'>{username}</SearchUserInfoUsername>
        <SearchUserInfoName data-testid='search-user-name'>{name}</SearchUserInfoName>
      </SearchUserInfo>
    </SearchUserWrapper>
  )
}

export default SearchUser
