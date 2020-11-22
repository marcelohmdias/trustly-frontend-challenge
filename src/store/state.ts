export interface Product {
  id: string
  description: string
  color: string
  price: string
  currency: string
  thumbnailURL: string
  maxresURL: string
}

export interface State {
  products: Array<Product>
}

export const initialState: State = {
  products: []
}
