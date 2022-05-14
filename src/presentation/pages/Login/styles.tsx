import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Main = styled.article`
  display: flex;
  justify-content: center;
  margin: 32px auto 0;
  max-width: 935px;
  padding-bottom: 32px;
  width: 100%;
  flex-grow: 1;

  justify-content: center;
  flex-direction: row;
`

export const MainImage = styled.div`
  display: flex;
  height: 100%;
  margin-right: 32px;
  justify-content: center;
  height: 581px;

  img {
    max-height: 100%;
    object-fit: contain;
  }
`

export const MainLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  height: 100%;
  flex-grow: 1;
  gap: 10px;
  margin-top: 12px;
`
