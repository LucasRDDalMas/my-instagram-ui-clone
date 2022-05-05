import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Caption from '.'
import { captionMock } from '@/presentation/mocks/mock-post'

const renderComponent = (caption: string): void => {
  render(<Caption caption={caption} />)
}

describe('PostFooter - Caption component', () => {
  test('should show full text on caption', async () => {
    renderComponent(captionMock.fullLine)
    const caption = await screen.findByTestId('caption')
    const moreButton = screen.queryByTestId('more-button')
    expect(caption.textContent).toBe(captionMock.fullLine)
    expect(moreButton).toBeFalsy()
  })

  test('should show caption cutted by break line', async () => {
    renderComponent(captionMock.twoLines)
    const caption = await screen.findByTestId('caption')
    const moreButton = screen.queryByTestId('more-button')
    expect(caption.textContent).toBe('Lorem Ipsum is simply dummy... ')
    expect(moreButton).toBeTruthy()
  })

  test('should show caption cut by break line and lenght', async () => {
    renderComponent(captionMock.multiline)
    const caption = await screen.findByTestId('caption')
    expect(caption.textContent).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard... ')
  })

  test('should show caption cut by lenght', async () => {
    renderComponent(captionMock.longLine)
    const caption = await screen.findByTestId('caption')
    expect(caption.textContent).toBe('Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker... ')
  })

  test('should show full caption after click in more button', async () => {
    renderComponent(captionMock.longLine)
    const more = await screen.findByTestId('more-button')
    fireEvent.click(more)

    const caption = await screen.findByTestId('caption')
    expect(caption.textContent).toBe(captionMock.longLine)
  })
})
