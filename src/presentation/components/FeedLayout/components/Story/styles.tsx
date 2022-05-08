import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  scroll-behavior: smooth;
  overflow: hidden;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin: 16px 0;
`

export const Scroll = styled.div`
  width: 100%;
  padding: 15px;
  position: relative;
  scroll-behavior: smooth;
  overflow: hidden;
  gap: 16px;
  display: flex;
`

export const UserStory = styled.div`
  width: 66px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const UserAvatar = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.story {
    background: var(--story);

  }

  img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid var(--background);
  }
`

export const UserUsername = styled.span`
  font-size: 13px;
  text-align: center;
  display: block;
  color: rgba(38,38,38,1);
  padding: 0 2px;
  margin-top: 5px;
`
