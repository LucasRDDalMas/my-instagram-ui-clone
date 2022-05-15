import styled from 'styled-components'
import { Flex } from '@/presentation/components/Header/styles'
import { device } from '@/presentation/utils/media-query'

export const SearchWrapper = styled(Flex)`
  background: var(--background-main);
  border-radius: 8px;
  padding: 3px 16px;
  border: 1px solid var(--border);
  height: 36px;
  width: 100%;
  min-width: 125px;
  position: relative;

  ${device.md`max-width: 200px;`}
  ${device.lg`max-width: 268px;`}

  .hide {
    display: none;
  }
`

export const SearchInput = styled.input`
  padding: 0 8px;
  width: 100%;
`

export const SearchResultWrapper = styled(Flex)`
  width: 376px;
  height: 360px;
  border-radius: 6px;
  opacity: 1;

  position: absolute;
  top: 45px;

  background-color: var(--background);  
  box-shadow: 0 0 5px 1px rgba(var(--black), .0975);

  flex-direction: column;
  transform-origin: top center;

  z-index: 4;
`

export const SearchResult = styled.div`
  display: flex;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin: 4px 16px 0;
  padding: 12px 0 0 0;

  overflow-x: hidden;
  overflow-y: auto;
`

export const IconUp = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  top: -6px;
  right: 181px;
  z-index: -1;
  
  width: 14px;
  height: 14px;

  transform: rotate(45deg);
  border-radius: 1px;

  background-color: var(--background);
  border: 1px solid var(--background);
  box-shadow: 0 0 5px 1px rgba(var(--black),.0975);
`

export const SearchResultTitle = styled.div`
    display: flex;
    padding-left: 26px;
    max-height: 24px;
    width: 100%;
`

export const SearchResultMessage = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;

  div {
    display: block;
    text-align: center;
    color: var(--secondary);
    margin: -3px 0 -4px;
  }
`
