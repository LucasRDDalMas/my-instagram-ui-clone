import React from 'react'
import Post from './components/Post'
import Story from './components/Story'
import { MainBox, Suggestion, Wrapper } from './styles'

const FeedLayout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <MainBox>
          <Story />
          <Post />
        </MainBox>

        <Suggestion>
          suggestion
        </Suggestion>
      </Wrapper>
    </>
  )
}

export default FeedLayout
