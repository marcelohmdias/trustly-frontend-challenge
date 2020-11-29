import { JSXProps } from '../../../types'
import * as S from './styles'

export type PaymentOpts = {
  name: string
  key: string
  image: string
  discount?: number
}

type PaymentOptionsProps = {
  options: Array<PaymentOpts>
  selected: string
  onSelectOption: (value: string) => void
}

export default function PaymentOptions({
  options,
  selected,
  onSelectOption
}: JSXProps<PaymentOptionsProps>) {
  return (
    <>
      {options.map((option) => {
        const isSelected = selected === option.key

        return (
          <S.Wrapper key={option.key} selected={isSelected}>
            <S.Label htmlFor={option.key}>
              <S.TextWrapper>
                <span>{option.name}</span>
                {option.discount && <S.Badge>Save ${option.discount}</S.Badge>}
              </S.TextWrapper>
              <img src={option.image} />
            </S.Label>
            <S.Input
              id={option.key}
              type="radio"
              name="option"
              value={option.key}
              checked={isSelected}
              onChange={({ target }) => onSelectOption(target.value)}
            />
          </S.Wrapper>
        )
      })}
    </>
  )
}
