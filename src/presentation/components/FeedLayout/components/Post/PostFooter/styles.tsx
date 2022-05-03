import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const LinkWrapper = styled.a`
  display: block;
  width: 100%;
  color: var(--secondary)!important;
  margin-bottom: 12px;
  padding: 0 12px;
`

export const Comments = styled(LinkWrapper)`
margin-bottom: 8px;
`

export const TimeAgo = styled(LinkWrapper)`
  margin-bottom: 12px;
  font-size: 10px;
  line-height: 12px
`
