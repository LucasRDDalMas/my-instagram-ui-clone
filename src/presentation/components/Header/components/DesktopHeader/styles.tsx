import styled from 'styled-components'
import { device } from '@/presentation/utils/media-query'
import { Nav } from '@/presentation/components/Header/styles'

export const NavDesktopWrapper = styled(Nav)`
  display: none;
  ${device.md`
    display: flex;
  `};
`
