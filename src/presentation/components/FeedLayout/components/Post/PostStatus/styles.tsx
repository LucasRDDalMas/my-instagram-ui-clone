import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`

export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: 0 0;
  border: 0;
  
  path {
    stroke: var(--primary);
  }

  .flip {
    transform: scaleX(-1);
  }

  &:hover {
    path {
      stroke: var(--secondary);
    }
  }
`

export const Likes = styled.section`
  display: flex;
  width: 100%;
  padding: 0 12px;
  margin: 8px 0;
`

export const LikesLink = styled.a`
  color: var(--primary);
  font-weight: 600;
`
