import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import PostHeader from '.'

const renderComponent = (): void => {
  render(<PostHeader />)
}

describe('PostHeader component', () => {
  test('should now show modal at load', async () => {
    renderComponent()
    const postHeaderModal = await screen.findByTestId('modal')
    expect(postHeaderModal).not.toBeVisible()
  })

  test('should show modal after click to open', async () => {
    renderComponent()
    const openButton = screen.getByTestId('post-header-open-button')
    fireEvent.click(openButton)

    const postHeaderModal = await screen.findByTestId('modal')
    expect(postHeaderModal).toBeVisible()
  })
})
