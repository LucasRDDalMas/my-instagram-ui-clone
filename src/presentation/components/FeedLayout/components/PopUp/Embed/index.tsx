import React from 'react'
import { CaptionOption, CopyButton, Terms, TextArea, Wrapper } from './styles'

const Embed: React.FC = () => {
  return (
    <Wrapper>
      <TextArea
        readOnly
        value='<blockquote></blockquote>'
      />

      <CaptionOption>
        <input type="checkbox" id="caption" name="caption" value="" />
        <label htmlFor="caption">I have a bike</label>
      </CaptionOption>

      <CopyButton>
        Copy Embed Code
      </CopyButton>

      <Terms>
        By using this embed, you agree to Instagram&apos;s <a>API Terms of Use.</a>
      </Terms>
    </Wrapper>
  )
}

export default Embed
