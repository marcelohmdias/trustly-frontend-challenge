import { Cart } from './../../../store/state'
import { JSXProps } from './../../../types'
import Button from './../../atoms/button/Button'
import TextField from './../../atoms/text-field/TextField'
import Title from './../../atoms/title/Title'
import PriceDetails from './../../molecules/price-details/PriceDetails'
import * as S from './styles'

type ReceiptProps = {
  cart: Cart
  payment: string
}

export default function ReceiptDetails({
  cart,
  payment
}: JSXProps<ReceiptProps>) {
  const detail = `x ${cart.quantity}, ${cart.product.color}, Size ${cart.size}`
  const item = `Item #${cart.product.id}`
  const paymentType: Record<string, string> = {
    ONLINE_BANKING: 'Online Banking',
    CARD_PAYMENT: 'Card payment',
    APPLE_PAY: 'Apple Pay'
  }

  return (
    <S.Container>
      <S.Grid>
        <S.Product>
          <Title tag="h2" text="Order summary" />
          <div className="content">
            <div className="content-image">
              <img
                src={cart.product.maxresURL}
                alt={cart.product.description}
              />
            </div>
            <div>
              <p>{cart.product.description}</p>
              <TextField text={detail} />
              <TextField text={item} />
            </div>
          </div>
        </S.Product>
        <S.Payment>
          <Title tag="h2" text="Payment Method" />
          <div className="content">
            <img src="/icon/bank.svg" alt="Bank icon" />
            <TextField className="content-text" text={paymentType[payment]} />
          </div>
        </S.Payment>
        <S.Price>
          <hr />
          <PriceDetails total={cart.total} />
        </S.Price>
        <S.Button>
          <Button onClick={() => {}}>Place order</Button>
        </S.Button>
      </S.Grid>
    </S.Container>
  )
}
