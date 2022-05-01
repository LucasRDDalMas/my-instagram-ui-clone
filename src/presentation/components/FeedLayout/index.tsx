import React from 'react'
import PostHeader from './components/PostHeader'
import Story from './components/Story'
import { MainBox, Suggestion, Wrapper } from './styles'

const FeedLayout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <MainBox>
          <Story />
          <PostHeader />
        </MainBox>

        <Suggestion>
          suggestion
        </Suggestion>
      </Wrapper>
    </>
  )
}

export default FeedLayout
