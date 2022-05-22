import styled from 'styled-components'

export const ProfileNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ProfileNumbersItem = styled.div`
  display: flex;
  margin-right: 40px;
  font-size: 16px;
  line-height: 24px;

  &:last-child {
    margin-right: 0;
  }
`

export const ProfileNumbersStrong = styled.span`
  font-weight: 600;
`
