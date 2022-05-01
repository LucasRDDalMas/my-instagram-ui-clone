import React from 'react'
import PostHeader from '../PostHeader'
import PostImage from '../PostImage'
import { Wrapper } from './styles'

const Post: React.FC = () => {
  return (
    <>
      <Wrapper>
        <PostHeader />
        <PostImage />
      </Wrapper>
    </>
  )
}

export default Post
