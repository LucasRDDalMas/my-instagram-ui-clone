import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfilPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;

  ${device.md`
    grid-gap: 28px;
  `}
`

export const ProfilePost = styled.a`
  img {
    width: 100%;
    height: 100%;
  }
`
