
import styled from 'styled-components'

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 12px;
  overflow: hidden;
  margin: 20px;
  
  height: calc(100vmin - 372px);
  width: calc(100vmin - 372px);
  max-height: min(calc(100vw - 372px), 855px);
  max-width: min(calc(100vw - 372px), 855px);
  min-height: 300px;
  min-width: 300px;
`

export const CloseButton = styled.button`
  position: absolute;
  padding: 8px;
  top: 10px;
  right: 10px;
`

export const UploadArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const UploadTitle = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  margin-top: 16px;
`

export const UploadButton = styled.button`
  background-color: var(--quartary);
  color: #FFF;
  margin-top: 24px;
  padding: 5px 9px;
  border: 1px solid transparent;
  border-radius: 4px;
`
