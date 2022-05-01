import React from 'react'
import Story from './Story'
import { Box, MainBox, Suggestion, Wrapper } from './styles'

const FeedLayout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <MainBox>
          <Story />
          <Box>
            Posts
          </Box>
        </MainBox>

        <Suggestion>
          suggestion
        </Suggestion>
      </Wrapper>
    </>
  )
}

export default FeedLayout
