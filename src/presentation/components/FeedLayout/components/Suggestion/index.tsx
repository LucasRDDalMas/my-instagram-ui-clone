import React from 'react'
import SuggestionList from './components/SuggestionList'
import SwitchAccount from './components/SwitchAccount'
import { Wrapper } from './styles'

const Suggestion: React.FC = () => {
  return (
    <Wrapper>
      <SwitchAccount />
      <SuggestionList />
    </Wrapper>
  )
}

export default Suggestion
