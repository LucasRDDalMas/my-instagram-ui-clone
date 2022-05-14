import styled from 'styled-components'

interface IInputWrapper {
  floatPlaceholder: boolean
}

export const InputWrapper = styled.div<IInputWrapper>`
  transition: all .3s;
  padding: 0;
  margin: 0;

  input {
    transition: all .3s;
    font-size: 16px;
    line-height: 18px;
    padding: 9px 0 7px 8px;

    width: 100%;
    border: 1px solid var(--border);
    border-radius: 3px;
    margin-bottom: 6px;
    background-color: var(--background-main);

    &:focus {
      border-color: var(--primary);
    }

    &::placeholder {
      color: transparent;
    }

    ${(props) => {
      if (props.floatPlaceholder) return '& + label {transform: scale(.83333) translateY(-4em) translateX(+10px);} padding: 14px 0 2px 8px; font-size: 12px;'
    }}
  }
`

export const InputField = styled.input`
`

export const Label = styled.label`
  color: var(--secondary);
  display: block;
  position: absolute;
  opacity: 1;
  transform: translateY(-2.65em) translateX(+10px);
  transform-origin: 0 0;
  transition: all 0.3s;
  font-size: 12px;
`
