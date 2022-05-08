import styled from 'styled-components'

const IconBase = styled.div`
  height: 45px;
  width: 45px;
  margin-left: 8px;
  margin-right: 8px;
  position: absolute;
  top: 50%;
  justify-self: center;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: var(--border-secondary);
  }

  svg {
    filter:
      drop-shadow(0.6px 0 0 rgba(var(--black), .0975))
      drop-shadow(-0.6px 0 0 rgba(var(--black), .0975))
      drop-shadow(0 -0.6px 0 rgba(var(--black), .0975))
      drop-shadow(0 0.6px 0 rgba(var(--black), .0975));
  }
`

export const LeftIcon = styled(IconBase)`
  left: 0;
`

export const RightIcon = styled(IconBase)`
  right: 0;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 8px 16px;
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

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
  margin-left: 8px;
  flex: 0 0 auto;

  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
`

export const FollowLink = styled(Link)`
  font-size: 12px;
  color: var(--quartary)!important;
`

export const FollowButton = styled(Button)`
  background-color: var(--quartary);
  color: rgb(var(--white));
`

export const FollowingButton = styled(Button)`
  background-color: var(--background);
  color: var(--primary);
  border: 1px solid var(--border);
`

export const SeeAllLink = styled(Link)`
  color: var(--primary)!important;
`
