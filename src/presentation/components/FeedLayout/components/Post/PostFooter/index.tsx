import React from 'react'
import Caption from './Caption'
import Comment from './Comment'
import { captionMock } from '@/presentation/mocks/mock-post'
import { Comments, TimeAgo, Wrapper } from './styles'

const PostFooter: React.FC = () => {
  return (
    <Wrapper>
      <Caption caption={captionMock.fullLine} />
      <Comments href=''>View all 39 comments</Comments>
      <TimeAgo href=''>5 HOURS AGO</TimeAgo>
      <Comment />
    </Wrapper>
  )
}

export default PostFooter
