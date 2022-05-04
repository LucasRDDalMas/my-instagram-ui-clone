import styled from 'styled-components'

const IconBase = styled.div`
  height: 45px;
  width: 45px;
  margin-left: 8px;
  margin-right: 8px;
  position: absolute;
  top: 50%;
  justify-self: center;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: var(--border-secondary);
  }

  svg {
    filter:
      drop-shadow(0.6px 0 0 rgba(var(--black), .0975))
      drop-shadow(-0.6px 0 0 rgba(var(--black), .0975))
      drop-shadow(0 -0.6px 0 rgba(var(--black), .0975))
      drop-shadow(0 0.6px 0 rgba(var(--black), .0975));
  }
`

export const LeftIcon = styled(IconBase)`
  left: 0;
`

export const RightIcon = styled(IconBase)`
  right: 0;
`
