import styled from 'styled-components'

export const Header = styled.span`
  display: flex;
  flex-direction: row;
  height: 43px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const CloseWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);

  path {
    stroke: var(--primary);
  }
`

export const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

export const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 8px;
  line-height: 18px;
`

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 16px;
  min-height: 48px;

  color: var(--primary);
  user-select: none;
  cursor: pointer;

  border-top: 1px solid var(--border);

  &:hover {
    background-color: #fafafa;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  path {
    fill: var(--tertiary);
  }
`

export const OptionText = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
