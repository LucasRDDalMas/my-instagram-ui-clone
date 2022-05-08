import React from 'react'
import Post from './components/Post'
import Story from './components/Story'
import Sidebar from './components/Sidebar'
import { MainBox, SuggestionBox, Wrapper } from './styles'

const FeedLayout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <MainBox>
          <Story />
          {[...Array(3)].map((_x, i) =>
            <Post key={i} />
          )}
        </MainBox>

        <SuggestionBox>
          <Sidebar />
        </SuggestionBox>
      </Wrapper>
    </>
  )
}

export default FeedLayout
