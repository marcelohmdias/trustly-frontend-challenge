import styled from 'styled-components'

export const Container = styled.main`
  background: #fff;
  border-radius: 0.65em;
  display: flex;
  flex-direction: column;
  height: 633px;

  @media (min-width: 769px) {
    background: #f7f7f7;
  }
`

export const Grid = styled.div`
  background: #f7f7f7;
  border-radius: 0.65em;
  display: grid;
  gap: 0px 0px;
  grid-template-areas:
    'Image Product'
    'Image Address'
    'Price Price'
    'Price Price';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  height: auto;
  padding: 1em;
  position: relative;
  transition: height 0.5s;
  width: 100%;
  will-change: contents;

  @media (min-width: 426px) {
    padding: 1.5em;
  }

  @media (min-width: 769px) {
    gap: 0px 0px;
    grid-template-areas:
      'Product Address'
      'Product Price';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    padding: 1.875em;
  }

  @media (min-width: 1025px) {
    padding: 2.25em;
  }

  @media (max-width: 425px) {
    &.opened {
      height: 271px;
    }

    &.closed {
      height: 100px;
      overflow: hidden;
    }
  }

  button {
    background-color: #f7f7f7;
    border: 0;
    position: absolute;
    top: 1.25em;
    right: 1.25em;

    @media (min-width: 426px) {
      display: none;
    }
  }
`

export const Image = styled.section`
  border-radius: 0.65em;
  grid-area: Image;
  height: 106px;
  margin-right: 1em;
  overflow: hidden;
  width: 92px;

  @media (min-width: 426px) {
    height: 167px;
    margin-right: 1.5em;
    width: 145px;
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 425px) {
    &.opened {
      height: 106px;
      width: 92px;
    }

    &.closed {
      height: 68px;
      width: 59px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5);
  }
`

export const Product = styled.section`
  grid-area: Product;
  margin-bottom: 0.75em;

  h2 {
    display: none;

    @media (min-width: 769px) {
      display: block;
      margin-bottom: 1.25em;
    }
  }

  h3 {
    @media (min-width: 769px) {
      line-height: 20px;
      margin-bottom: 1em;
    }
  }

  p {
    @media (min-width: 426px) {
      font-size: 1em;
    }
  }
`

export const Address = styled.section`
  grid-area: Address;

  h3,
  p {
    font-size: 0.85em;

    @media (min-width: 426px) {
      font-size: 1em;
      line-height: 154.6%;
    }
  }

  h3 {
    @media (min-width: 769px) {
      font-size: 1.25em;
      margin-bottom: 1.25em;
    }
  }
`

export const Price = styled.section`
  grid-area: Price;
  margin-top: 1em;
  min-width: 290px;
  width: 100%;

  @media (min-width: 769px) {
    margin-top: 1.875em;
  }
`

export const Payment = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  @media (min-width: 769px) {
    margin-top: 1.5em;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 23px;
    margin-bottom: 1em;

    & ::first-letter {
      text-transform: uppercase;
    }

    @media (min-width: 769px) {
      font-size: 1.375em;
    }

    span {
      display: none;

      @media (min-width: 769px) {
        display: inline;
        margin-right: 1px;
      }
    }
  }

  button {
    margin-left: auto;
    width: 50%;
  }
`

export const PaymentOptions = styled.div`
  background: #f7f7f7;
  border-radius: 0.65em;
  margin-bottom: 1em;
  padding: 1em;
`
