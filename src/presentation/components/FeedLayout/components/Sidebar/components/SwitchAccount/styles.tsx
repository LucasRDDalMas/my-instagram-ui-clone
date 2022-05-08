import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 66px;
  margin-bottom: 10px;
  padding: 0 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
`

export const Avatar = styled.a`
  width: 56px;
  height: 56px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
`

export const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`

const UserInfoText = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 0 auto;
  justify-content: flex-start;
  width: 100%;
`

export const Username = styled(UserInfoText)`
  font-weight: 600;
`

export const UsernameLink = styled.a`
  color: var(--primary);
`

export const Name = styled(UserInfoText)`
  margin-top: 8px;
  color: var(--secondary);
`

export const Switch = styled.div`
  margin-left: 8px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
`

export const SwitchButton = styled.button`
  color: var(--quartary);
  font-weight: 600;
`
