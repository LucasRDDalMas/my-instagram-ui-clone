import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 16px 16px 16px;

  img {
    border-radius: 50%;
    width: 90px;
    height: 90px;
  }
`

export const Username = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 32px;
`
