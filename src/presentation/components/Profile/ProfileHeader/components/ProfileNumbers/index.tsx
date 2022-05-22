import React from 'react'
import { ProfileNumbersItem, ProfileNumbersStrong, ProfileNumbersWrapper } from './styles'

const ProfileNumbers: React.FC = () => {
  return (
    <ProfileNumbersWrapper>
      <ProfileNumbersItem>
        <ProfileNumbersStrong>240</ProfileNumbersStrong>
        &nbsp;posts
      </ProfileNumbersItem>
      <ProfileNumbersItem>
        <ProfileNumbersStrong>27.K</ProfileNumbersStrong>
        &nbsp;followers
      </ProfileNumbersItem>
      <ProfileNumbersItem>
        <ProfileNumbersStrong>150</ProfileNumbersStrong>
        &nbsp;following
      </ProfileNumbersItem>
    </ProfileNumbersWrapper>
  )
}

export default ProfileNumbers
