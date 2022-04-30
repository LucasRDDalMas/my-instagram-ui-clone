import React, { useState } from 'react'
import { SearchWrapper, SearchInput, SearchResultWrapper, IconUp, SearchResultTitle, SearchResult, SearchResultMessage } from './styles'
import { IconSearch } from '@/presentation/assets/icons'
import SearchResultList from './components/SearchResultList'

const Search: React.FC = () => {
  const [hideSearchIcon, setHideSearchIcon] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <>
      <SearchWrapper>
        <IconSearch color='#8e8e8e' className={hideSearchIcon ? 'hide' : ''} />
        <SearchInput
          placeholder='Search'
          onFocus={() => {
            setHideSearchIcon(true)
          }}
          onBlur={() => {
            setHideSearchIcon(false)
          }}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setSearch(event.currentTarget.value)
          }}
        />

        {hideSearchIcon && (
          <SearchResultWrapper>
            <IconUp />
            <SearchResult>
              {!search
                ? <>
                  <SearchResultTitle>
                    <h4>Recent</h4>
                  </SearchResultTitle>
                  <SearchResultMessage>
                    <div>No recent searches.</div>
                  </SearchResultMessage>
                </>
                : <SearchResultList />
              }
            </SearchResult>
          </SearchResultWrapper>
        )}
      </SearchWrapper>
    </>
  )
}

export default Search
