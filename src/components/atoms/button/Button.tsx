import { WithChildren } from '@/types'

import * as S from './styles'

type ButtonProps = {
  disabled?: boolean
  onClick(): void
}

export default function Button({
  disabled,
  onClick,
  children
}: WithChildren<ButtonProps>) {
  return (
    <S.Button
      disabled={disabled}
      aria-disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </S.Button>
  )
}
