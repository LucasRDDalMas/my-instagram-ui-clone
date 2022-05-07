import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Comment from '.'

const renderComponent = (): void => {
  render(<Comment />)
}

describe('Comment component', () => {
  test('should disable post button if comment do not have value', () => {
    renderComponent()
    const commentSubmit = screen.getByTestId('comment-submit')
    expect(commentSubmit).toBeDisabled()
  })

  test('should enable post button if comment have value', () => {
    renderComponent()
    const commentInput = screen.getByTestId('comment-input')

    fireEvent.change(commentInput, { target: { value: 'My Comment' } })
    const commentSubmit = screen.getByTestId('comment-submit')

    expect(commentSubmit).toBeEnabled()
  })

  test('should not show emoji modal at start', () => {
    renderComponent()
    const commentEmoji = screen.getByTestId('comment-emoji')
    expect(commentEmoji).not.toBeVisible()
  })

  test('should show emoji after click open modal', () => {
    renderComponent()
    const emojiButton = screen.getByTestId('comment-emoji-open')
    fireEvent.click(emojiButton)

    const commentEmoji = screen.getByTestId('comment-emoji')
    const emojis = commentEmoji.getElementsByClassName('emoji-img')
    fireEvent.click(emojis[0])

    const commentInput: HTMLInputElement = screen.getByTestId('comment-input')
    expect(commentInput.value).toBe('😀')
  })
})
