import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import { useCart } from './../../../hooks/useCart'
import { useCheckout } from './../../../hooks/useCheckout'
import { Cart } from './../../../store/state'
import Avatar from './../../atoms/avatar/Avatar'
import BackButton from './../../atoms/back-button/BackButton'
import Timeline from './../../atoms/timeline/Timeline'
import Title from './../../atoms/title/Title'
import Header from './../../molecules/header/Header'
import Payment from './../../molecules/payment/Payment'
import ProductDetails from './../../molecules/product-details/ProductDetails'
import ReceiptDetails from './../../molecules/receipt-details/ReceiptDetails'
import Grid from './../../organisms/grid/Grid'

export default function CheckoutTemplate() {
  const { cart } = useCart()
  const { addPanelListener, createTransaction } = useCheckout()
  const router = useRouter()

  const [title, setTitle] = useState('Checkout')
  const [selectedOption, setSelectedOption] = useState('ONLINE_BANKING')
  const [timelineOptions, setTimelineOptions] = useState([
    {
      key: 'cart',
      name: 'Cart',
      completed: true
    },
    {
      key: 'payment-options',
      name: 'Payment options',
      completed: true
    },
    {
      key: 'receipt',
      name: 'Receipt',
      completed: false
    }
  ])

  const isReceipt = timelineOptions.every((item) => item.completed)

  const mockedAddress = {
    name: 'John Smith',
    phone: '01312428200',
    address: 'Redwood City, 2000.'
  }

  const mockedPaymentOptions = [
    {
      name: 'Online Banking',
      key: 'ONLINE_BANKING',
      image: '/icon/online_banking.svg',
      discount: 10
    },
    {
      name: 'Card payment',
      key: 'CARD_PAYMENT',
      image: '/icon/card_payment.svg'
    },
    {
      name: 'Apple Pay',
      key: 'APPLE_PAY',
      image: '/icon/apple_pay.svg'
    }
  ]

  function backButton() {
    if (isReceipt) {
      setTitle('Checkout')

      const timeline = timelineOptions.map((item) => {
        if (item.key !== 'receipt') return item
        return Object.assign({}, item, { completed: false })
      })

      return setTimelineOptions(timeline)
    }

    return router.push('/')
  }

  useEffect(() => {
    if (!cart) router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    addPanelListener((command, event) => {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          setTitle('Review and confirmation')

          const timeline = timelineOptions.map((item) => {
            return Object.assign({}, item, { completed: true })
          })

          setTimelineOptions(timeline)
        } else {
          alert('cancel!')
        }
        return false
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid>
      <Grid.header>
        <Header>
          <Header.button>
            <BackButton onClick={() => backButton()} />
          </Header.button>
          <Header.title>
            <Title tag="h1" text={title} />
          </Header.title>
          <Header.avatar>
            <Avatar src="/img/avatar.png" alt="User avatar image" />
          </Header.avatar>
        </Header>
      </Grid.header>
      <Grid.body>
        <Timeline options={timelineOptions} />
        <Payment product={cart!.product}>
          <Title tag="h1" text={title} />
          {isReceipt ? (
            <ReceiptDetails cart={cart as Cart} payment={selectedOption} />
          ) : (
            <ProductDetails
              address={mockedAddress}
              cart={cart as Cart}
              options={mockedPaymentOptions}
              selectedOption={selectedOption}
              onSelectOption={(value: string) => setSelectedOption(value)}
              onTransaction={() =>
                createTransaction((cart as Cart).total.toFixed(2))
              }
            />
          )}
        </Payment>
      </Grid.body>
    </Grid>
  )
}
