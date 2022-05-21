
import styled from 'styled-components'
import { IShow, showComponent } from '@/presentation/components/shared/styles'

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 12px;
  overflow: hidden;
  margin: 20px;
  
  height: calc(100vmin - 372px);
  width: calc(100vmin - 372px);
  max-height: min(calc(100vw - 272px), 955px);
  max-width: min(calc(100vw - 272px), 955px);
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
  position: relative;
`

export const Ratio = styled.div<IShow>`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background: rgba(26,26,26,.8);
  border-radius: 8px;
  width: 120px;
  ${({ shouldShow }: IShow) => { if (shouldShow) return showComponent }}
  top: -10px;
  transform: translateY(-100%);
  left: 0;
`

export const RatioButton = styled.button`
  width: 100%;
  color: #FFF;
  padding: 0 0 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--secondary);
  &:first-child {
    border-top: 0;
  }
`

export const RatioText = styled.div`
  display: flex;
  flex: 1 1 auto;
  color: var(--secondary);
  font-weight: 600;
  height: 100%;
  font-size: 14px;
  line-height: 18px;
`

export const RatioIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 12px;
`

export const Zoom = styled.div<IShow>`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background: rgba(26,26,26,.8);
  border-radius: 8px;
  height: 32px;
  width: 132px;
  ${({ shouldShow }: IShow) => { if (shouldShow) return showComponent }}
  top: -10px;
  transform: translateY(-100%);
  left: 0;
  display: flex;
  align-items: center;
  padding: 8px 12px;
`

export const SlideRange = styled.input`
  appearance: none;
  width: 100%;
  outline: 0;
  opacity: 0.7;
  transition: opacity .2s;
  height: 1px;

  background-image: linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 100%);

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    appearance: none;
    background: #FFF;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFF;
    cursor: pointer;
  }
`

export const UploadMore = styled.div<IShow>`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background: rgba(26,26,26,.8);
  border-radius: 8px;
  height: 32px;
  width: 132px;
  ${({ shouldShow }: IShow) => { if (shouldShow) return showComponent }}
  top: -10px;
  transform: translateY(-100%);
  right: 0;
  display: flex;
  align-items: center;
  padding: 8px;
`
