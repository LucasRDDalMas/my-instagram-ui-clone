
import React from 'react'
import Caption from './Caption'
import { Comments, TimeAgo, Wrapper } from './styles'

const PostFooter: React.FC = () => {
  return (
    <Wrapper>
      <Caption />
      <Comments href=''>View all 39 comments</Comments>
      <TimeAgo href=''>5 HOURS AGO</TimeAgo>
    </Wrapper>
  )
}

export default PostFooter
