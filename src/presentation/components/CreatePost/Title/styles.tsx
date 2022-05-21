
import styled from 'styled-components'

export const TitleWrapper = styled.span`
  display: flex;
  flex-direction: row;
  height: 43px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const PreviousButton = styled.button`
  margin-left: 8px;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 auto;
  padding: 8px;
`

export const TitleText = styled.span`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
`

export const NextButton = styled.button`
  margin-right: 8px;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 auto;
  padding: 8px;
  font-weight: 600;
  color: var(--quartary);
`
