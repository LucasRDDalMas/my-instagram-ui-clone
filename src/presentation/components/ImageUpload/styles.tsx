
import styled from 'styled-components'

interface IWrapper {
  isVisible: boolean
}

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
  z-index: 3;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-in;

`

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 12px;
  overflow: hidden;
  max-height: calc(100% - 40px);
  margin: 20px;
  min-width: 308px;
  min-height: 351px;
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
