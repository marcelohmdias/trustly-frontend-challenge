import { JSXProps } from '../../../types'
import * as S from './styles'

type TextFieldProps = {
  text: string
}

export default function TextField({
  text,
  className
}: JSXProps<TextFieldProps>) {
  return <S.Text className={className}>{text}</S.Text>
}
