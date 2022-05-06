import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Report from '.'

const close = jest.fn()

const renderComponent = (): void => {
  render(<Report close={close} />)
}

describe('PopUp - Report component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should close report after click x button', async () => {
    renderComponent()
    const reportClose = screen.getByTestId('report-close')
    fireEvent.click(reportClose)
    expect(close).toBeCalledTimes(1)
  })

  test('should close report after click cancel button', async () => {
    renderComponent()
    const reportCancel = screen.getByTestId('report-cancel')
    fireEvent.click(reportCancel)
    expect(close).toBeCalledTimes(1)
  })
})
