import styled from 'styled-components'

export const LoginWrapper = styled.div`
  border: 1px solid var(--border);
  background-color: var(--background);
  padding: 10px 40px;
`

export const LoginLogo = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin: 36px 0 12px;
  height: 51px;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`

export const LoginSocial = styled.button`
  display: flex;
  width: 100%;
  margin: 8px 0;
  color: #385185;
  margin: 8px 0;
  font-weight: 600;
  padding: 5px 9px;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 14px;
  }
`

export const ForgotPassword = styled.a`
  color: #00376b;;
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  text-align: center;
  display: block;
  width: 100%;
`
