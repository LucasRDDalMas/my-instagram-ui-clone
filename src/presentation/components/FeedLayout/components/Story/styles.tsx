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
  cursor: pointer;
`

export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.story {
    background-color: var(--story);
  }

  img {
    width: 56px;
    height: 56px;
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
