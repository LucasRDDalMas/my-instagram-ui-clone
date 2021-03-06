import styled from 'styled-components'

export const Title = styled.span`
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

export const CloseButton = styled.button`
  background: none;
  border: 0;
  padding: 8px;
`

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  min-height: 48px;

  color: var(--primary);
  user-select: none;
  cursor: pointer;

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
  margin-right: 12px;

  path {
    stroke: var(--primary);
  }
`

export const OptionText = styled.div`
  display: flex;
  flex: 1 1 auto;

  color: var(--primary);
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
