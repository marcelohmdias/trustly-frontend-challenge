import ProductCard from '@/components/molecules/product-card/ProductCard'
import { Product } from '@/store/state'
import { WithChildren } from '@/types'

import * as S from './styles'

type ProductGridProps = WithChildren<{
  products: Array<Product>
}>

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <S.Wrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Wrapper>
  )
}
