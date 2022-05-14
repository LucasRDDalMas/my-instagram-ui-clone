import React from 'react'
import { InputWrapper, Label } from './styles'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const FloatInput: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  return (
    <InputWrapper data-testid={`${props.name}-wrapper`} floatPlaceholder={state[props.name] !== ''}>
      <input
        {...props}
        readOnly
        data-testid={props.name}
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
        autoComplete='off'
        autoCapitalize="off"
        autoCorrect="off"
        id={props.name}
      />
      <Label htmlFor={props.name}>{props.placeholder}</Label>
    </InputWrapper>
  )
}

export default FloatInput
