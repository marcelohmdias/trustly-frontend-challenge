import * as S from './styles'

type SelectorProps = {
  label: string
  name: string
  options: Array<string>
  onSelectHander(selected: string): void
  value: string
}

export default function Selector({
  label,
  name,
  options,
  onSelectHander,
  value
}: SelectorProps) {
  function handler(target: HTMLSelectElement) {
    onSelectHander(target.value)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        name={name}
        value={value}
        onChange={(evt) => handler(evt.target)}
      >
        <option value="" disabled>
          Choice
        </option>

        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Wrapper>
  )
}
