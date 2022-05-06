import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import LikeList from '.'

const setShouldShow = jest.fn()

const renderComponent = (shouldShow: boolean): void => {
  render(<LikeList shouldShow={shouldShow} setShouldShow={setShouldShow} />)
}

const getLikeLisrWrapper = (): HTMLElement => {
  return screen.getByTestId('like-list-wrapper')
}

describe('PostFooter - LikeList component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should not show like list when parameter is false', () => {
    renderComponent(false)
    const likeList = getLikeLisrWrapper()
    expect(likeList).not.toBeVisible()
  })

  test('should show like list when parameter is true', () => {
    renderComponent(true)
    const likeList = getLikeLisrWrapper()
    expect(likeList).toBeVisible()
  })

  test('should close like list when click to close', () => {
    renderComponent(true)
    fireEvent.click(screen.getByTestId('like-list-close-button'))

    expect(setShouldShow).toBeCalledTimes(1)
    expect(setShouldShow).toBeCalledWith(false)
  })
})
