import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Share from '.'

const close = jest.fn()

const renderComponent = (): void => {
  render(<Share close={close} />)
}

describe('PopUp - Share component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should close share after click x button', async () => {
    renderComponent()
    const shareCancel = screen.getByTestId('share-close')
    fireEvent.click(shareCancel)
    expect(close).toBeCalledTimes(1)
  })

  test('should close share after click cancel button', async () => {
    renderComponent()
    const shareCancel = screen.getByTestId('share-cancel')
    fireEvent.click(shareCancel)
    expect(close).toBeCalledTimes(1)
  })
})
