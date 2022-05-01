import React from 'react'
import { Option } from '../Options/styles'
import { Image, Username, Wrapper } from './styles'

type Props = {
  close: () => void
}

const Unfollow: React.FC<Props> = ({ close }: Props) => {
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
      <Option onClick={() => close()}>
        Cancel
      </Option>
    </Wrapper>
  )
}

export default Unfollow
