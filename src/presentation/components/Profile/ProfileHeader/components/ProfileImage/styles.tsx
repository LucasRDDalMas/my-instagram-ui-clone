import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;

  ${device.md`
    flex-shrink: 0;
    flex-basis: 0;
    flex-grow: 1;
    margin-right: 30px;
  `}
`

export const ProfileImageBorder = styled.div`
  border: 2px solid var(--border);
  overflow: hidden;
  border-radius: 50%;
  align-self: center;
  display: block;
`

export const Image = styled.img`
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  width: 77px;
  height: 77px;
  border: 5px solid #FFF;

  ${device.md`
    width: 160px;
    height: 160px;
  `}
`
