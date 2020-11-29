import { NextPageContext } from 'next'

import CheckoutTemplate from './../components/templates/checkout/CheckoutTemplate'

export default function Checkout() {
  return <CheckoutTemplate />
}

Checkout.getInitialProps = ({ res }: NextPageContext) => {
  if (res) {
    res.writeHead(301, { Location: '/' })
    res.end()
  }

  return { started: true }
}
