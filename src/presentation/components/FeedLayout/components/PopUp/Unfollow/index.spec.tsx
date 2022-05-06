import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Unfollow from '.'

const close = jest.fn()

const renderComponent = (): void => {
  render(<Unfollow close={close} />)
}

describe('PopUp - Unfollow component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should call close callback after click cancel', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('unfollow-cancel')
    fireEvent.click(postHeaderModal)
    expect(close).toBeCalledTimes(1)
  })
})
