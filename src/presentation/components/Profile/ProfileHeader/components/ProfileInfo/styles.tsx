import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  ${device.md`
    padding: 0;
  `}
`

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

export const ProfileBio = styled.div`
  font-size: 16px;
  line-height: 24px;
`

export const ProfileWebSite = styled.a`
  display: block;
  width: 100%;
  color: #00376b;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`
