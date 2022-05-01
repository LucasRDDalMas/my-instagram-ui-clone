import styled from 'styled-components'

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 4px 8px 12px;
  padding: unset;
  max-width: calc(100% - 48px);
`

export const HeaderAvatar = styled.a`
  width: fit-content;
  height: fit-content;
  display: block;
  text-decoration: none;
  cursor: pointer;

  div {
    width: 34px;
    height: 34px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &.story {
      background: var(--story);
    }
  }

  img {
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    border-radius: 50%;
    border: 2px solid var(--background);
  }
`

export const HeaderUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 10px;
  min-height: 40px;
  overflow: hidden;
  flex-direction: column;
`

const UserTextInfo = styled.a`
  width: 100%;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  padding: 2px;
`

export const Username = styled(UserTextInfo)`
  color: var(--primary);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;  
`

export const Location = styled(UserTextInfo)`
  color: var(--secondary);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`

export const OptionsWrapper = styled.div`
  padding-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  button {
    padding: 8px;
    background: 0 0;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
  }
`
