import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import PostImage from '.'
import { postPhotosMock } from '@/presentation/mocks/mock-post'

const renderComponent = (photos?: string[]): void => {
  render(<PostImage photos={photos} />)
}

const getLeftButton = (): HTMLElement => {
  return screen.queryByTestId('left-button')
}

const getRightButton = (): HTMLElement => {
  return screen.queryByTestId('right-button')
}

const getPhotos = (): HTMLElement[] => {
  return screen.getAllByTestId('photos')
}

const getCarrouselIcon = (): HTMLElement => {
  return screen.getByTestId('image-carousel-icon')
}

describe('Post - PostImage component', () => {
  test('should load one photo then not show any navigation button', () => {
    renderComponent(postPhotosMock.one)

    expect(getLeftButton()).toBeFalsy()
    expect(getRightButton()).toBeFalsy()
    expect(getCarrouselIcon().childElementCount).toBe(1)
    expect(getPhotos().length).toBe(1)
  })

  test('should load ten photos then show navigation button for right side only', () => {
    renderComponent(postPhotosMock.ten)

    expect(getLeftButton()).toBeFalsy()
    expect(getRightButton()).toBeTruthy()
    expect(getCarrouselIcon().childElementCount).toBe(10)
    expect(getPhotos().length).toBe(10)
  })

  test('should change photo then show navigation button for both sides', () => {
    renderComponent(postPhotosMock.ten)
    fireEvent.click(getRightButton())

    expect(getLeftButton()).toBeTruthy()
    expect(getRightButton()).toBeTruthy()
  })

  test('should change to last photo then show navigation button for left side only', () => {
    renderComponent(postPhotosMock.two)
    fireEvent.click(getRightButton())

    expect(getLeftButton()).toBeTruthy()
    expect(getRightButton()).toBeFalsy()
  })

  test('should change photo and back then show navigation button for right side only', () => {
    renderComponent(postPhotosMock.two)
    fireEvent.click(getRightButton())
    fireEvent.click(getLeftButton())

    expect(getLeftButton()).toBeFalsy()
    expect(getRightButton()).toBeTruthy()
  })

  test('should not render if no photo', () => {
    renderComponent()
    expect(screen.queryByTestId('data-testid-attribute-value')).not.toBeInTheDocument()
  })
})
