import { useState } from 'react'

import { Cart } from './../../../store/state'
import { JSXProps } from './../../../types'
import Button from './../../atoms/button/Button'
import TextField from './../../atoms/text-field/TextField'
import Title from './../../atoms/title/Title'
import PaymentOptions, {
  PaymentOpts
} from './../../molecules/payment-options/PaymentOptions'
import PriceDetails from './../../molecules/price-details/PriceDetails'
import * as S from './styles'

type Address = {
  name: string
  phone: string
  address: string
}

type PaymentProps = {
  address: Address
  cart: Cart
  options: Array<PaymentOpts>
  selectedOption: string
  onSelectOption: (value: string) => void
  onTransaction: () => void
}

export default function ProductDetails({
  address,
  cart,
  options,
  selectedOption,
  onSelectOption,
  onTransaction
}: JSXProps<PaymentProps>) {
  const detail = `x ${cart.quantity}, ${cart.product.color}, Size ${cart.size}`
  const item = `Item #${cart.product.id}`
  const [opened, setOpened] = useState(true)

  return (
    <S.Container>
      <S.Grid className={opened ? 'opened' : 'closed'}>
        <button onClick={() => setOpened(!opened)}>
          <img src={`/icon/${opened ? 'minus' : 'plus'}.svg`} alt="" />
        </button>
        <S.Image className={opened ? 'opened' : 'closed'}>
          <img src={cart.product.maxresURL} alt={cart.product.description} />
        </S.Image>
        <S.Product>
          <Title tag="h2" text="Cart total" />
          <Title tag="h3" text={cart.product.description} />
          <TextField text={detail} />
          <TextField text={item} />
        </S.Product>
        <S.Address>
          <Title tag="h3" text="Delivery details" />
          <TextField text={address.name} />
          <TextField text={`Phone no: ${address.phone}`} />
          <TextField text={`Address: ${address.address}`} />
        </S.Address>
        <S.Price>
          <PriceDetails total={cart.total} />
        </S.Price>
      </S.Grid>
      <S.Payment>
        <h2>
          <span>select your</span> payment method
        </h2>
        <S.PaymentOptions>
          <PaymentOptions
            options={options}
            selected={selectedOption}
            onSelectOption={(value: string) => onSelectOption(value)}
          />
        </S.PaymentOptions>
        <Button onClick={() => onTransaction()}>Continue</Button>
      </S.Payment>
    </S.Container>
  )
}
