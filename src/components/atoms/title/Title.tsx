import * as S from './styles'

type TitleProps = {
  title: string
}

export default function Title({ title }: TitleProps) {
  return <S.Title>{title}</S.Title>
}
