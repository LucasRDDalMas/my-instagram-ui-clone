import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "main sidebar";
  grid-template-columns: minmax(320px, 470px) 0;

  grid-gap: 16px;

  max-width: 821px;
  margin: 0 auto;

  ${device.lg`
    grid-template-columns: 470px 335px;
  `}
`

export const MainBox = styled.div`
  grid-area: "main";
`

export const SuggestionBox = styled.div`
  grid-area: "sidebar";
`
