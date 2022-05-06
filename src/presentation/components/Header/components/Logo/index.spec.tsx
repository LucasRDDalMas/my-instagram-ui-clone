import React from 'react'
import { screen, render } from '@testing-library/react'
import Logo from '.'

const renderComponent = (): void => {
  render(<Logo />)
}

describe('Header - Logo component', () => {
  test('should load with default value', () => {
    renderComponent()
    const logoLink = screen.getByTestId('logo-link')
    expect(logoLink).toBeVisible()
    expect(logoLink).toHaveAttribute('href', '/')
    expect(screen.getByTestId('logo-image')).toHaveAttribute('alt', 'My Instagram')
  })
})
