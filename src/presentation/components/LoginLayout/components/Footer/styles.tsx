import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 24px 20px 52px;
  display: flex;
  flex-direction: column;
`

export const Links = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Link = styled.a`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: var(--secondary)!important;
  display: inline;
  margin: 0 8px 12px;
  white-space: nowrap;
`

export const CopyRight = styled.div`
  margin: 12px 0;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  font-size: 12px;
  line-height: 16px;

  span {
    margin-left: 16px;
    color: var(--secondary);
  }
`

export const Language = styled.div`
  position: relative;
  color: var(--secondary);
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LanguageSelect = styled.select`
  cursor: pointer;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
`
