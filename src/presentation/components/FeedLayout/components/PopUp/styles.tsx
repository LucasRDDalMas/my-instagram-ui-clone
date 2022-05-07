import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  z-index: 3;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-in;

  &.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.4s ease-in, opacity 0.4s ease-in;
  }
`

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 12px;
  overflow: hidden;
  width: 300px;

  ${device.sm`
    width: 400px;
  `}
`
