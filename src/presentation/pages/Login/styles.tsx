import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Main = styled.article`
  display: flex;
  justify-content: center;
  margin: 32px auto 0;
  max-width: 935px;
  padding-bottom: 32px;
  width: 100%;
  flex-grow: 1;

  height: 582px;
  justify-content: center;
  flex-direction: row;
`

export const MainImage = styled.div`
  display: flex;
  flex-basis: 380px;
  height: 100%;
  margin-right: 32px;
  justify-content: center;

  img {
    height: 100%;
  }
`

export const MainLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  height: 100%;
  flex-grow: 1;
  gap: 10px;
`

export const LoginWrapper = styled.div`
  border: 1px solid var(--border);
  background-color: var(--background);
  padding: 10px 40px;
`

export const LoginLogo = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin: 36px 0 12px;
  height: 56px;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`

export const LoginFormInput = styled.input`
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 9px 0 7px 8px;
  margin-bottom: 6px;
`

export const LoginFormButton = styled.button`
  display: flex;
  flex: 0 0 auto;
  background-color: var(--quartary);
  color: rgb(var(--white));
  margin: 8px 0;
  font-weight: 600;
  padding: 5px 9px;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 14px;
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

export const SignUpWrapper = styled.div`
  border: 1px solid var(--border);
  background-color: var(--background);
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 25px 0;
  border-radius: 1px;

  a {
    font-weight: 600;
  }
`

export const Apps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 10px 20px 10px 20px;
  }
`

export const AppsLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  gap: 10px;

  img {
    height: 40px;
  }
`

export const Footer = styled.footer`
`
