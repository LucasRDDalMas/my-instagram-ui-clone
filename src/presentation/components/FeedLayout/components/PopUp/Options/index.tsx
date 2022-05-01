import React from 'react'
import { Option } from './styles'

type Props = {
  share: () => void
  embed: () => void
  unfollow: () => void
}

const Options: React.FC<Props> = ({ share, embed, unfollow }: Props) => {
  return (
    <>
      <Option className='danger'>
        Report
      </Option>
      <Option className='danger' onClick={() => unfollow()}>
        Unfollow
      </Option>
      <Option>
        Go to Post
      </Option>
      <Option>
        Tagged Accounts
      </Option>
      <Option onClick={() => share()}>
        Share to...
      </Option>
      <Option>
        Copy Link
      </Option>
      <Option onClick={() => embed()}>
        Embed
      </Option>
      <Option>
        Cancel
      </Option>
    </>
  )
}

export default Options
