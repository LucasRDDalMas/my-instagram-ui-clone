import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  margin: 16px 16px 0;
  ${device.md`
    margin: 16px 16px 24px;
    margin: 0;
    margin-bottom: 44px;
  `}
`

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30px;
  flex-grow: 2;
`

export const ProfileStatusWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const ProfileDesktop = styled.div`
  display: none;
  ${device.md`
    display: unset;
  `}
`

export const ProfileMobile = styled.div`
  display: block;
  ${device.md`
    display: none;
  `}
`
