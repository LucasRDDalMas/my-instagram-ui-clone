import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
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
  min-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 0 0 0;
  flex-direction: column;
  align-items: center;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  width: 100%;
  align-items: center;
`

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 12px;
  flex: 0 0 auto;
  justify-content: flex-start;
  position: relative;

  img {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #FFF;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
`

export const UserInfoUsername = styled.a`
  font-weight: 700;
  display: block;
  width: 100%;
  color: var(--primary);
`

export const UserInfoName = styled.span`
  display: block;
  width: 100%;
  color: var(--secondary);
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
  margin-left: 8px;
  padding: 5px 9px;
  flex: 0 0 auto;

  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
`

export const FollowButton = styled(Button)`
  background-color: var(--quartary);
  color: rgb(var(--white));
`

export const FollowingButton = styled(Button)`
  background-color: var(--background);
  color: var(--primary);
  border: 1px solid var(--border)
`
