import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 0;
  ${device.lg`flex: 1 0 127px;`}
  ${device.md`flex: 1 0 90px;`}
`

export const LogoLink = styled.a`
  flex: 0 0 auto;
  display: flex;
`

export const LogoImage = styled.img`
  width: 110px;
  margin-top: 5px;
  cursor: pointer;
`
