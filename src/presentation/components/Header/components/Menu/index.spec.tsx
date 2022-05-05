import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Menu from '.'

const renderComponent = (): void => {
  render(<Menu />)
}

describe('Header - Menu component', () => {
  test('should load with default value and closed menu', () => {
    renderComponent()
    const profileMenu = screen.queryByTestId('profile-menu')
    const iconHomeOff = screen.queryByTestId('icon-home-off')
    const iconHomeOn = screen.queryByTestId('icon-home-on')
    expect(profileMenu).toBeFalsy()
    expect(iconHomeOff).toBeFalsy()
    expect(iconHomeOn).toBeTruthy()
  })

  test('should open profile menu after clicl profile picture', () => {
    renderComponent()
    const profileButton = screen.queryByTestId('profile-button')
    fireEvent.click(profileButton)

    const profileMenu = screen.queryByTestId('profile-menu')
    const iconHomeOff = screen.queryByTestId('icon-home-off')
    const iconHomeOn = screen.queryByTestId('icon-home-on')
    expect(profileMenu).toBeTruthy()
    expect(iconHomeOff).toBeTruthy()
    expect(iconHomeOn).toBeFalsy()
  })
})
