
import styled from 'styled-components'

interface IWrapper {
  isVisible: boolean
}

const visible = `
  visibility: visible;
  opacity: 1;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-in;
`

export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  z-index: 4;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-in;

  ${(props) => {
    if (props.isVisible) return visible
  }}
`

export const CloseButton = styled.button`
  position: absolute;
  padding: 8px;
  top: 10px;
  right: 10px;
`

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
