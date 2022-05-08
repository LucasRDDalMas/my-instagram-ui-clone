import { UserWrapper } from '@/presentation/components/shared/styles'
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
  z-index: 10;
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

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  height: 43px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const CloseWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);

  path {
    stroke: var(--primary);
  }
`

export const CloseButton = styled.button`
  background: none;
  border: 0;
  padding: 8px;
`

export const UserList = styled.div`
  display: flex;
  width: 100%;
  max-height: 356px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 0 0 0;
  flex-direction: column;
  align-items: center;
`

export const User = styled(UserWrapper)`
  padding: 8px 16px;
`
