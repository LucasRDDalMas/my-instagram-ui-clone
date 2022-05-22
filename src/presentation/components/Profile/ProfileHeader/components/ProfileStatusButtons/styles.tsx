import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: space-between;
  height: 100;
  ${device.md`
    margin-left: 28px;
    height: 100%;
    justify-content: flex-start;
  `}
`

export const Button = styled.button`
  border: 1px solid var(--border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${device.md`margin-left: 28px;`}
`

export const ButtonFollow = styled(Button)`
  margin-left: 8px;
  padding: 0 12px;

  ${device.md`padding: 0 24px;`}
`

export const ButtonSuggestion = styled(Button)`
  margin-left: 8px;
  padding: 0 12px;
`
