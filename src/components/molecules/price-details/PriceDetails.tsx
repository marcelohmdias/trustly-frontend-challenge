import { JSXProps } from '../../../types'
import TextField from './../../atoms/text-field/TextField'
import Title from './../../atoms/title/Title'
import * as S from './styles'

type PriceDetailsProps = {
  total: number
}

export default function PriceDetails({ total }: JSXProps<PriceDetailsProps>) {
  return (
    <S.Wrapper>
      <S.Card>
        <Title tag="h3" text="Total Cost" />
        <TextField text="Delivery included" />
      </S.Card>
      <S.Card>
        <S.Price>$ {total}</S.Price>
      </S.Card>
    </S.Wrapper>
  )
}
