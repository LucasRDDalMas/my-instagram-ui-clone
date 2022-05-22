import styled from 'styled-components'

export const ProfileStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileUsername = styled.h2`
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
`

export const Verified = styled.div`
  display: flex;
  margin-left: 8px;
`

export const Button = styled.button`
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const ButtonFollow = styled(Button)`
  margin-left: 8px;
  padding: 0 24px;
`

export const ButtonSuggestion = styled(Button)`
  margin-left: 8px;
  padding: 0 12px;
`

export const Options = styled.button`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
