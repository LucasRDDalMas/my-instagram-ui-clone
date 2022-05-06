import React from 'react'
import { Option } from '../Options/styles'
import { Image, Username, Wrapper } from './styles'

interface IUnfollow {
  close: () => void
}

const Unfollow: React.FC<IUnfollow> = ({ close }: IUnfollow) => {
  return (
    <Wrapper>
      <Image>
        <img src='https://picsum.photos/500' alt='' />
      </Image>

      <Username>
        Unfollow @mizuyunosan_?
      </Username>

      <Option className='danger'>
        Unfollow
      </Option>
      <Option data-testid='unfollow-cancel' onClick={() => close()}>
        Cancel
      </Option>
    </Wrapper>
  )
}

export default Unfollow
