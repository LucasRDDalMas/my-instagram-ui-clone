import styled from 'styled-components'

export const SearchUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  width: 100%;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`

interface ISearchUserAvatar {
  hasStory: boolean
}

export const SearchUserAvatar = styled.div<ISearchUserAvatar>`
  display: flex;
  flex-direction: row;
  margin-right: 12px;
  flex: 0 0 auto;
  justify-content: flex-start;
  position: relative;
  padding: 2px;
  border-radius: 50%;
  ${(props) => {
    if (props.hasStory) return 'background: var(--story);'
  }}

  img {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #FFF;
  }
`

export const SearchUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchUserInfoUsername = styled.span`
  font-weight: 700;
  display: block;
  width: 100%;
  color: var(--primary);
`

export const SearchUserInfoName = styled.span`
  display: block;
  width: 100%;
  color: var(--secondary);
`
