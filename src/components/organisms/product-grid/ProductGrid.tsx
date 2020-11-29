import { Product } from './../../../store/state'
import { JSXProps } from './../../../types'
import ProductCard from './../../molecules/product-card/ProductCard'
import * as S from './styles'

type ProductGridProps = {
  products: Array<Product>
}

export default function ProductGrid({ products }: JSXProps<ProductGridProps>) {
  return (
    <S.Wrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Wrapper>
  )
}
