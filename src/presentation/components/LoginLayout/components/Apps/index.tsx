import React from 'react'
import { AppsWrapper, AppsLinks } from './styles'
import GooglePlay from '@/presentation/assets/images/google-play.png'
import AppStore from '@/presentation/assets/images/app-store.png'

const Apps: React.FC = () => {
  return (
    <AppsWrapper>
        <p>Get the app.</p>
        <AppsLinks>
          <a href=''>
              <img src={AppStore} alt='' />
          </a>
          <a href=''>
              <img src={GooglePlay} alt='' />
          </a>
        </AppsLinks>
    </AppsWrapper>
  )
}

export default Apps
