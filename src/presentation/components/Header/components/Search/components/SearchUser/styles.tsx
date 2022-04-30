import styled from 'styled-components'

export const SearchUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  width: 100%;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`

export const SearchUserAvatar = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 12px;
  flex: 0 0 auto;
  justify-content: flex-start;
  position: relative;

  canvas {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 48px;
    height: 48px;
    user-select: none;
    border-radius: 50%;
    z-index: -1;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  img {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #FFF;
  }
`

export const SearchUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchUserInfoUsername = styled.span`
  font-weight: 700;
  display: block;
  width: 100%;
  color: var(--primary);
`

export const SearchUserInfoName = styled.span`
  display: block;
  width: 100%;
  color: var(--secondary);
`
