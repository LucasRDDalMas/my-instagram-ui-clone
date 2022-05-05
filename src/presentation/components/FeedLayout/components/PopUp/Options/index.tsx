import React from 'react'
import { Option } from './styles'

interface IOptions {
  share: () => void
  embed: () => void
  unfollow: () => void
  report: () => void
}

const Options: React.FC<IOptions> = ({ share, embed, unfollow, report }: IOptions) => {
  return (
    <>
      <Option className='danger' onClick={() => report()}>
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
