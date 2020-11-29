import styled from 'styled-components'

export const Container = styled.main`
  background: #fff;
  border-radius: 0.65em;
  height: 633px;

  @media (min-width: 769px) {
    background: #f7f7f7;
  }

  h2 {
    color: #000000;
    display: block;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 154.6%;
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 0px 0px;
  grid-template-areas:
    'Product'
    'Payment'
    'Price'
    'Button';
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  height: auto;
  width: 100%;

  @media (min-width: 426px) {
    padding: 1.5em;
  }

  @media (min-width: 769px) {
    gap: 0px 0px;
    grid-template-areas:
      'Product Payment'
      'Price Button';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 0.5em;
  }

  @media (min-width: 1025px) {
    padding: 1.25em;
  }
`

export const Product = styled.section`
  grid-area: Product;
  background: #f7f7f7;
  border-radius: 0.65em;
  margin-bottom: 1em;
  padding: 1em;

  .content {
    align-items: center;
    display: flex;

    &-image {
      border-radius: 0.65em;
      height: 92px;
      margin-right: 1em;
      overflow: hidden;
      width: 92px;

      @media (min-width: 769px) {
        display: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.5);
      }
    }
  }
`

export const Payment = styled.section`
  grid-area: Payment;
  background: #f7f7f7;
  border-top-left-radius: 0.65em;
  border-top-right-radius: 0.65em;
  padding: 1em;

  .content {
    align-items: center;
    display: flex;

    img {
      margin-right: 0.5em;
    }

    &-text {
      color: #000000;
      font-size: 1em;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
    }
  }
`

export const Price = styled.section`
  grid-area: Price;
  background: #f7f7f7;
  border-bottom-left-radius: 0.65em;
  border-bottom-right-radius: 0.65em;
  padding: 0 1em 1.25em;

  hr {
    border: 0;
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 1.25em;

    @media (min-width: 769px) {
      display: none;
    }
  }

  h3,
  p {
    font-size: 1em;
    line-height: 20px;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
    line-height: 44px;
  }
`

export const Button = styled.section`
  grid-area: Button;
  margin-top: 1em;

  @media (min-width: 769px) {
    margin-top: 0;
    padding: 0 1em;

    button {
      max-width: 100%;
    }
  }
`
