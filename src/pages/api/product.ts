// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Product } from '../../store/state'

const url = 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'

export default async function (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const data = await fetch(url)

  const products: Product[] = await data.json()

  res.status(200).json(products)
}
