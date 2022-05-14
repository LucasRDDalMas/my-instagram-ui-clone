import { IconHappyFace } from '@/presentation/assets/icons'
import { useOutsideAlerter } from '@/presentation/utils/outside-alerter'
import EmojiPicker, { IEmojiData } from 'emoji-picker-react'
import React, { useRef, useState } from 'react'
import { CommentInput, CommentSubmit, EmojiButton, EmojiPickerWrapper, Wrapper } from './styles'

const Comment: React.FC = () => {
  const [comment, setComment] = useState<string>('')
  const [showEmoji, setShowEmoji] = useState<boolean>(false)
  const emojiModalRef = useRef(null)

  const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>): void => setComment(event.target.value)

  const onEmojiClick = (_event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData): void => {
    setComment(comment.concat(data.emoji))
  }

  /* istanbul ignore next */
  useOutsideAlerter(emojiModalRef, () => setShowEmoji(false))

  return (
    <Wrapper>
      <EmojiButton ref={emojiModalRef}>
        <IconHappyFace size='24' color='#262626' onClick={() => setShowEmoji(!showEmoji)} data-testid='comment-emoji-open' />
        <EmojiPickerWrapper className={showEmoji ? 'show' : ''} data-testid='comment-emoji'>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </EmojiPickerWrapper>
      </EmojiButton>
      <CommentInput aria-label="Add a comment…" placeholder="Add a comment…" autoComplete='off' autoCorrect="off" value={comment} onChange={handleChangeComment} data-testid='comment-input' />
      <CommentSubmit disabled={comment === ''} data-testid='comment-submit'>
        Post
      </CommentSubmit>
    </Wrapper>
  )
}

export default Comment
