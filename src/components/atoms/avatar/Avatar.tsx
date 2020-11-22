import * as S from './styles'

type AvatarProps = {
  alt: string
  src: string
}

export default function Avatar({ alt, src }: AvatarProps) {
  return <S.Avatar src={src} alt={alt} />
}
