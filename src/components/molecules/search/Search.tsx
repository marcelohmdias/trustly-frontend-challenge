import { useProduct } from '@/hooks/useProducts'
import { WithChildren } from '@/types'

import * as S from './styles'

export default function Seaarch({ children }: WithChildren) {
  const { matchProducts } = useProduct()

  function searchHandler(target: HTMLInputElement) {
    matchProducts(target.value)
  }

  return (
    <S.Wrapper>
      <S.Icon src="/icon/search.svg" alt="Search icon" />
      <S.Input
        name="search"
        placeholder="Search for your sneaker"
        onChange={(evt) => searchHandler(evt.target)}
      />
    </S.Wrapper>
  )
}
