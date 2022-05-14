import styled from 'styled-components'

export const LoginWrapper = styled.div`
  border: 1px solid var(--border);
  background-color: var(--background);
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
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

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  color: var(--secondary);
  text-align: center;
`

export const LoginSocial = styled.button`
  display: flex;
  width: 100%;
  height: auto;
  margin: 8px 0;
  font-weight: 600;
  padding: 5px 9px;
  justify-content: center;
  align-items: center;
  background-color: var(--quartary);
  border-radius: 4px;

  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #FFF;
  }
`

export const Policy = styled.p`
  margin: 10px 0;
  color: var(--secondary);
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  a {
    color: var(--secondary);
    font-weight: 600;
  }
`
