import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid var(--border);
  padding: 5px 12px;
`

export const EmojiButton = styled.button`
  padding: 8px 12px 8px 0;
  position: relative;
  svg {
    cursor: pointer;

    path {
      stroke: var(--primary);
    }
  }
`

export const EmojiPickerWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: -12px;
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.4s ease-in, opacity 0.4s ease-in;
  &.show {
    opacity: 1;
    visibility: visible;
    transition: visibility 0.4s ease-in, opacity 0.4s ease-in;
  }
`

export const CommentInput = styled.textarea`
  height: 18px;
  max-height: 80px;
  display: flex;
  flex-grow: 1;
  font-size: inherit;
  outline: 0;
  padding: 0;
  resize: none;
`

export const CommentSubmit = styled.button`
  color: var(--quartary);
  display: block;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    opacity: .3;
    pointer-events: none;
  }
`
