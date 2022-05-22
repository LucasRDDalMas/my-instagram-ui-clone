import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;
  box-sizing: content-box;

  ${device.md`
    padding: 30px 20px 0;
    width: calc(100% - 40px);
  `}
`
