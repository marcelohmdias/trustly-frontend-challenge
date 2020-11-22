import { useContext, useEffect } from 'react'

import { Product } from '@/store/state'
import { Context, ContextStore } from '@/store/Store'

export function useProduct() {
  const [state, dispatch] = useContext<ContextStore>(Context)

  const { products } = state

  function matchProducts(str: string) {
    dispatch({ type: 'FILTER_PRODUCTS', payload: str })
  }

  async function findProducts() {
    try {
      const data = await fetch('/api/product').then((data) => data.json())

      const payload = (data as Product[])?.map((item) => {
        item.visible = true
        return item
      })

      dispatch({ type: 'LOAD_PRODUCTS', payload })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { products, matchProducts }
}
