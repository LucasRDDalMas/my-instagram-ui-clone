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

  height: 582px;
  flex-direction: row;
`

export const MainImage = styled.div`
  display: flex;
  flex-basis: 380px;
  height: 100%;
  margin-right: 32px;
  background-color: blue;

  img {
    height: 100%;
  }
`

export const MainLoginForm = styled.div`
  display: flex;
  justify-content: center;
  max-width: 350px;
  flex-grow: 1;
  background-color: red;
`

export const Footer = styled.footer`
`
