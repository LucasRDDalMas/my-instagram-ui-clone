import styled from 'styled-components'

export const Option = styled.button`
  display: block;
  width: 100%;
  padding: 4px 8px;
  min-height: 48px;

  line-height: 1.5;
  text-align: center;
  color: var(--primary);

  border-top: 1px solid var(--border);

  user-select: none;
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &.danger {
    font-weight: 700;
    color: var(--danger-link);
  }
`
