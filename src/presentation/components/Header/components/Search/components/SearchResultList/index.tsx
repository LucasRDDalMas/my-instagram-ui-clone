import React from 'react'
import SearchUser from '../SearchUser'
import { SearchResultListWrapper } from './styles'

const SearchResultList: React.FC = () => {
  return (
    <SearchResultListWrapper>
      <SearchUser
        avatar='https://cdn.vox-cdn.com/thumbor/N6-QGX2FaDUgPW3-RRqoM3dfpkQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg'
        name='Aang'
        username='avatar'
        hasStory={false}
      />
      <SearchUser
        avatar='https://cdn.vox-cdn.com/thumbor/N6-QGX2FaDUgPW3-RRqoM3dfpkQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg'
        name='Aang'
        username='avatar'
        hasStory={true}
      />
    </SearchResultListWrapper>
  )
}

export default SearchResultList
