import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--border);
  padding: 12px 0;
  ${device.md`
    margin-bottom: 20px;
    border-top: 0;
    padding: 0;
  `}
`

export const ProfileNumbersItem = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary);

  &:last-child {
    margin-right: 0;
  }  

  ${device.md`
    margin-right: 40px;
    font-size: 16px;
    line-height: 24px;
    flex: 0;
    flex-direction: row;
    justify-content: left;
  `}
`

export const ProfileNumbersStrong = styled.span`
  font-weight: 600;
`
