
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

export const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: red;
`

export const ImageZoomOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 15px;
  left: 15px;
`

export const Option = styled.div`
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background: rgba(26,26,26,.8);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  cursor: pointer;
`

export const MultipleImageOption = styled(Option)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`

export const OptionButton = styled.button`
  padding: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
