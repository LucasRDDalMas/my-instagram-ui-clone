import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4px 16px;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  color: var(--tertiary)!important;
  font-size: 12px;
  line-height: 16px;
`

export const Links = styled.div`
  margin-bottom: 3px;
  display: flex;
  width: 100%;
  flex: 1;
  margin-bottom: 19px;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Link = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: var(--tertiary)!important;
  display: inline;
  white-space: nowrap;
`

export const CopyRight = styled.p`
  text-transform: uppercase;
  color: var(--tertiary);
`
