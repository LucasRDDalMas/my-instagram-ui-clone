import { IconDown, IconMenuDots, IconUserCheck, IconVerified } from '@/presentation/assets/icons'
import { Header } from '@/presentation/components'

import React from 'react'
import { ProfileImageWrapper, ProfileHeader, ProfileWrapper, ProfileImage, ProfileStatus, ProfileStatusWrapper, ProfileUsername, Verified, Button, ButtonFollow, ButtonSuggestion, Options, ProfileImageBorder, ProfileNumbers, ProfileNumbersItem, ProfileNumbersStrong } from './styles'

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <ProfileWrapper>
        <ProfileHeader>
          <ProfileImageWrapper>
            <ProfileImageBorder>
              <ProfileImage src='https://picsum.photos/500' alt='' />
            </ProfileImageBorder>
          </ProfileImageWrapper>
          <ProfileStatusWrapper>
            <ProfileStatus>
              <ProfileUsername>aang</ProfileUsername>
              <Verified>
                <IconVerified size='18' color='#0095f6' />
              </Verified>
              <Button>Message</Button>
              <ButtonFollow><IconUserCheck size='16' /></ButtonFollow>
              <ButtonSuggestion><IconDown size='16' /></ButtonSuggestion>
              <Options>
                <IconMenuDots size='24' />
              </Options>
            </ProfileStatus>
            <ProfileNumbers>
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
            </ProfileNumbers>
          </ProfileStatusWrapper>
        </ProfileHeader>
      </ProfileWrapper>
    </>
  )
}

export default Profile
