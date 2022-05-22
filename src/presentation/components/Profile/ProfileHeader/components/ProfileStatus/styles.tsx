import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileUsername = styled.h2`
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
`

export const Verified = styled.div`
  display: flex;
  margin-left: 8px;
`

export const Options = styled.button`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileStatusButtonsWrapper = styled.div`
  display: none;
  opacity: 0;
  visibility: hidden;
  ${device.md`
    opacity: 1;
    visibility: visible;
    display: unset;
  `}
`
