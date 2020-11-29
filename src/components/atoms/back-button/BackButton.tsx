import * as S from './styles'

type BackButtonProps = {
  onClick(): void
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <S.Button onClick={() => onClick()}>
      <img src="/icon/back.svg" alt="Back button" />
      <S.Span>Back</S.Span>
    </S.Button>
  )
}
