import { JSXProps } from '../../../types'
import { Product } from './../../../store/state'
import * as S from './styles'

type PaymentProps = {
  product: Product
}

export default function Payment({ children, product }: JSXProps<PaymentProps>) {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <S.Img src={product.maxresURL} alt={product.description} />
      </S.ImgContainer>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}
