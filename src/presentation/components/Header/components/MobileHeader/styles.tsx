import styled from 'styled-components'
import { device } from '@/presentation/utils/media-query'
import { Nav } from '@/presentation/components/Header/styles'

export const NavMobileWrapper = styled(Nav)`
  ${device.md`
    display: none;
  `};
`
