import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1px;
  border: 1px solid var(--border);
  margin: 0 0 7px;
  min-height: 34px;
  resize: none;
  white-space: nowrap;
  color: var(--primary);
`

export const CaptionOption = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  input {
    margin-right: 10px;
  }
`

export const CopyButton = styled.button`
  width: 100%;
  display: block;
  margin: 8px 0;
  padding: 5px 9px;
  background-color: var(--quartary);
  border: 1px solid transparent;
  border-radius: 4px;
  color: rgb(var(--white));
  font-weight: 600;
`

export const Terms = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: var(--secondary);
`
