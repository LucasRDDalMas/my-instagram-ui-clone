import React from 'react'
import { screen, render } from '@testing-library/react'
import SearchUser from '.'
import { faker } from '@/helper'

const avatar = faker.avatar()
const name = faker.name()
const username = faker.word()

const renderComponent = (hasStory: boolean): void => {
  render(<SearchUser
    avatar={avatar}
    username={username}
    name={name}
    hasStory={hasStory}
  />)
}

describe('Header - SearchUser component', () => {
  test('should show user without story border', () => {
    renderComponent(false)
    const searchUserAvatar = screen.getByTestId('search-user-avatar')
    expect(searchUserAvatar.style.backgroundColor).toBe('')
  })

  test('should show user with story border', () => {
    renderComponent(true)
    const searchUserAvatar = screen.getByTestId('search-user-avatar')
    expect(searchUserAvatar).toHaveStyle('background: var(--story)')
  })

  test('should user correct avatar', () => {
    renderComponent(false)
    const searchUserAvatar = screen.getByTestId('search-user-avatar')
    expect(searchUserAvatar.firstChild).toHaveAttribute('src', avatar)
  })

  test('should print correct username', () => {
    renderComponent(true)
    const searchUserInfoUsername = screen.getByTestId('search-user-username')
    expect(searchUserInfoUsername.textContent).toBe(username)
  })

  test('should print correct name', async () => {
    renderComponent(false)
    const searchUserInfoName = await screen.findByTestId('search-user-name')
    expect(searchUserInfoName.textContent).toBe(name)
  })
})
