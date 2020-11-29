import * as S from './styles'

export type Option = {
  completed: boolean
  name: string
  key: string
}

type TimelineProps = {
  options: Option[]
}

export default function Timeline({ options }: TimelineProps) {
  function RenderStatus(option: Option, index: number, list: Option[]) {
    const className = []

    if (!index) className.push('first')
    if (index === list.length - 1) className.push('last')
    if (option.completed) className.push('completed')

    return (
      <S.Status key={option.name}>
        <S.Marker className={className.join(' ')} />
        <S.Label className={className.join(' ')}>{option.name}</S.Label>
      </S.Status>
    )
  }

  return <S.Timeline>{options?.map(RenderStatus)}</S.Timeline>
}
