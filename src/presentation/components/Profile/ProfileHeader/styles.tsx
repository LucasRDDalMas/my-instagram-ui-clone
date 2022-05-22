import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  margin: 16px 16px 24px;
  ${device.md`
    margin: 0;
    margin-bottom: 44px;
  `}
`

export const ProfileStatusWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 30px;
  flex-grow: 2;
`
