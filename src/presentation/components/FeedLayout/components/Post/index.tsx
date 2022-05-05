import { postPhotosMock } from '@/presentation/mocks/mock-post'
import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import PostStatus from './PostStatus'
import { Wrapper } from './styles'

const Post: React.FC = () => {
  return (
    <>
      <Wrapper>
        <PostHeader />
        <PostImage photos={postPhotosMock.ten} />
        <PostStatus />
        <PostFooter />
      </Wrapper>
    </>
  )
}

export default Post
