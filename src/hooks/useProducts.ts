import { useContext, useEffect } from 'react'

import { Context, ContextStore } from '@/store/Store'

export function useProduct() {
  const [state, dispatch] = useContext<ContextStore>(Context)

  const { products } = state

  useEffect(() => {
    ;(async (): Promise<void> => {
      const data = await fetch('/api/product').then((data) => data.json())

      dispatch({ type: 'LOAD_PRODUCTS', payload: data.results })
    })()
  })

  return { products }
}
