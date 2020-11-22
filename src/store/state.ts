export type Product = {
  color: string
  currency: string
  description: string
  id: string
  maxresURL: string
  price: string
  thumbnailURL: string
  visible: boolean
}

export type Cart = {
  product: Product
  quantity: string
  size: string
  total: number
}

export interface State {
  products: Array<Product>
  cart?: Cart
  cartLoading: boolean
}

export const initialState: State = {
  products: [],
  cartLoading: false
}
