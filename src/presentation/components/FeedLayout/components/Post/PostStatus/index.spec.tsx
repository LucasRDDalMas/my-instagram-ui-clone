import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import PostStatus from '.'

const renderComponent = (): void => {
  render(<PostStatus />)
}

describe('Post - PostStatus component', () => {
  test('should not show like list at load', () => {
    renderComponent()
    const likeList = screen.getByTestId('like-list-wrapper')
    expect(likeList).not.toBeVisible()
  })

  test('should show like list after click link', () => {
    renderComponent()
    const postStatusLikes = screen.getByTestId('post-status-likes')
    fireEvent.click(postStatusLikes)

    const likeList = screen.getByTestId('like-list-wrapper')
    expect(likeList).toBeVisible()
  })
})
