import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Options from '.'

const share = jest.fn()
const embed = jest.fn()
const unfollow = jest.fn()
const report = jest.fn()
const close = jest.fn()

const renderComponent = (): void => {
  render(<Options share={share} embed={embed} unfollow={unfollow} report={report} close={close} />)
}

describe('PopUp - Options component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should call close callback after click cancel', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('options-close')
    fireEvent.click(postHeaderModal)
    expect(share).toBeCalledTimes(0)
    expect(embed).toBeCalledTimes(0)
    expect(unfollow).toBeCalledTimes(0)
    expect(report).toBeCalledTimes(0)
    expect(close).toBeCalledTimes(1)
  })

  test('should call embed callback after click Embed', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('options-embed')
    fireEvent.click(postHeaderModal)
    expect(share).toBeCalledTimes(0)
    expect(embed).toBeCalledTimes(1)
    expect(unfollow).toBeCalledTimes(0)
    expect(report).toBeCalledTimes(0)
    expect(close).toBeCalledTimes(0)
  })

  test('should call share callback after click Share', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('options-share')
    fireEvent.click(postHeaderModal)
    expect(share).toBeCalledTimes(1)
    expect(embed).toBeCalledTimes(0)
    expect(unfollow).toBeCalledTimes(0)
    expect(report).toBeCalledTimes(0)
    expect(close).toBeCalledTimes(0)
  })

  test('should call unfollow callback after click Unfollow', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('options-unfollow')
    fireEvent.click(postHeaderModal)
    expect(share).toBeCalledTimes(0)
    expect(embed).toBeCalledTimes(0)
    expect(unfollow).toBeCalledTimes(1)
    expect(report).toBeCalledTimes(0)
    expect(close).toBeCalledTimes(0)
  })

  test('should call report callback after click Report', () => {
    renderComponent()
    const postHeaderModal = screen.getByTestId('options-report')
    fireEvent.click(postHeaderModal)
    expect(share).toBeCalledTimes(0)
    expect(embed).toBeCalledTimes(0)
    expect(unfollow).toBeCalledTimes(0)
    expect(report).toBeCalledTimes(1)
    expect(close).toBeCalledTimes(0)
  })
})
