import { device } from '@/presentation/utils/media-query'
import styled from 'styled-components'

export const ProfileNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--border);
 
  ${device.md`
    grid-gap: 28px;
  `}
`

interface IProfileNavItem {
  isActive: boolean
}

export const ProfileNavItem = styled.a<IProfileNavItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  text-transform: uppercase;
  flex: 1 1 auto;
  height: 44px;
  margin-top: -1px;

  ${({ isActive }: IProfileNavItem) => {
    if (isActive) return 'border-top: 1px solid var(--primary);'
  }}

  ${device.md`
    flex: 0;
    height: 52px;
    &:not(:last-child) {
      margin-right: 60px;
    }
  `}
`

export const ProfileNavItemText = styled.span`
  display: none;
  visibility: 0;
  opacity: 0;
  color: var(--secondary);
  margin-left: 6px;

  ${device.md`
    display: unset;
    visibility: 1;
    opacity: 1;
  `}
`
