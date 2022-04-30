/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { css } from 'styled-components'

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const device = (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
  (acc, key) => {
    acc[key] = (style: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (min-width: ${breakpoints[key]}px) {
          ${css(style, ...placeholders)}
        }
      `.join('')

    return acc
  }, {} as Record<keyof typeof breakpoints, (s: TemplateStringsArray, ...p: any[]) => string>
)
