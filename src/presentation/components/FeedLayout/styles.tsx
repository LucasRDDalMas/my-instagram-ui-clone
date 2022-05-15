import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "main";
  grid-template-columns: minmax(100%, 470px);

  max-width: 470px;
  margin: 0 auto;

  ${device.lg`
    grid-gap: 16px;
    grid-template-areas: "main sidebar";
    max-width: 821px;
    grid-template-columns: 470px 335px;
  `}
`

export const MainBox = styled.div`
  grid-area: "main";
  width: 100%;
`

export const SuggestionBox = styled.div`
  grid-area: "sidebar";
  display: none;
  ${device.lg`
    display: unset;
  `}
`
