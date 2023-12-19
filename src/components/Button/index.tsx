import { Wrapper } from './Button.styles'

type ButtonProps = {
  text: string
  callback: () => void
}

const Button: React.FC<ButtonProps> = ({ text, callback }) => (
  <Wrapper type='button' onClick={callback}>
    {text}
  </Wrapper>
)

export default Button
