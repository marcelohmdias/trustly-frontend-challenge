import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

import { JSXProps } from '../../../types'
import { useCart } from './../../../hooks/useCart'
import { Product } from './../../../store/state'
import Button from './../../atoms/button/Button'
import Loader from './../../atoms/loader/Loader'
import Selector from './../../atoms/selector/Selector'
import * as S from './styles'

type ProductGridProps = JSXProps<{
  product: Product
}>

export default function ProductCard({ product }: ProductGridProps) {
  const { addToCart, cartLoading } = useCart()
  const router = useRouter()

  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState('')

  const sizeList = ['38', '39', '40', '41', '42', '43']
  const quantityList = ['1', '2', '3', '4', '5']

  async function addToCartHandler() {
    await addToCart({
      product,
      quantity,
      size
    })

    setTimeout(() => router.push('/checkout'), 500)
  }

  if (product.visible) {
    return (
      <S.Card>
        {cartLoading && <Loader />}
        <S.CardImage src={product.thumbnailURL} alt={product.description} />
        <S.CardTitle>{product.description}</S.CardTitle>
        <S.CardPrice>$ {product.price}</S.CardPrice>
        <S.CardOptions>
          <Selector
            label="Size"
            name="size"
            onSelectHander={(value) => setSize(value)}
            options={sizeList}
            value={size}
          />
          <Selector
            label="Quantity"
            name="quantity"
            onSelectHander={(value) => setQuantity(value)}
            options={quantityList}
            value={quantity}
          />
        </S.CardOptions>
        <S.CardFooter>
          <Button
            disabled={!size || !quantity}
            onClick={() => addToCartHandler()}
          >
            Add to cart
          </Button>
        </S.CardFooter>
      </S.Card>
    )
  }

  return null
}
