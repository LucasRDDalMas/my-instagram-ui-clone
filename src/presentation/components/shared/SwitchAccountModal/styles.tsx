import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

interface IWrapper {
  shouldShow: boolean
}

export const Wrapper = styled.div<IWrapper>`
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
  z-index: 4;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-out;

  ${(props: IWrapper) => {
    if (props.shouldShow) return 'visibility: visible;opacity: 1; transition: visibility 0.4s ease-in, opacity 0.4s ease-in;'
  }}
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

export const Account = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #FAFAFA;
  }
`

export const AccountAvatar = styled.a`
  margin-right: 12px;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: block;
  overflow: hidden;
`

export const AccountUsername = styled.span`
  display: flex;
  flex: 1 1 auto;
  font-weight: 600;
`

export const ActualAccountIcon = styled.div`
  margin-left: 8px;
  display: flex;
`

export const LoginLink = styled.a`
  display: flex;
  flex-direction: row;
  height: 43px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border);
  position: relative;
  
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`
