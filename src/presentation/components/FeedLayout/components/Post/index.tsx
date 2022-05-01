import React from 'react'
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import PostStatus from './PostStatus'
import { Wrapper } from './styles'

const Post: React.FC = () => {
  return (
    <>
      <Wrapper>
        <PostHeader />
        <PostImage />
        <PostStatus />
      </Wrapper>
    </>
  )
}

export default Post
