import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "main sidebar";
  grid-template-columns: 470px 319px;

  grid-gap: 16px;

  max-width: 821px;
  margin: 0 auto;
`

export const MainBox = styled.div`
  grid-area: "main";
`

export const Box = styled.div`
  
`

export const Suggestion = styled.div`
  grid-area: "sidebar";
`
