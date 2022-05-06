import React from 'react'
import { Option } from './styles'

interface IOptions {
  share: () => void
  embed: () => void
  unfollow: () => void
  report: () => void
  close: () => void
}

const Options: React.FC<IOptions> = ({ share, embed, unfollow, report, close }: IOptions) => {
  return (
    <>
      <Option data-testid='options-report' className='danger' onClick={() => report()}>
        Report
      </Option>
      <Option data-testid='options-unfollow' className='danger' onClick={() => unfollow()}>
        Unfollow
      </Option>
      <Option>
        Go to Post
      </Option>
      <Option>
        Tagged Accounts
      </Option>
      <Option data-testid='options-share' onClick={() => share()}>
        Share to...
      </Option>
      <Option>
        Copy Link
      </Option>
      <Option data-testid='options-embed' onClick={() => embed()}>
        Embed
      </Option>
      <Option data-testid='options-close' onClick={() => close()}>
        Cancel
      </Option>
    </>
  )
}

export default Options
