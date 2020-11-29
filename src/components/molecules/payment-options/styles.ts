import styled from 'styled-components'

type PaymentSelect = {
  selected: boolean
}

export const Wrapper = styled.div<PaymentSelect>`
  background: #fff;
  border-radius: 9.02222px;
  border: 2px solid ${(props) => (props.selected ? '#63b55c' : '#fff')};
  height: 60px;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Label = styled.label`
  align-items: center;
  color: #565656;
  display: flex;
  font-size: 0.875em;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: space-between;
  line-height: 18px;
  width: 100%;

  img {
    max-width: 130px;

    @media (min-width: 426px) {
      max-width: unset;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  left: -9999px;
  position: absolute;
`

export const Badge = styled.span`
  background: #ffcc00;
  border-radius: 5px;
  color: #9e7d27;
  font-size: 9.77px;
  font-style: normal;
  font-weight: bold;
  line-height: 10px;
  margin-top: 0.5em;
  padding: 0.35em 0.75em;
  text-align: center;
  text-transform: uppercase;
  width: 70px;

  @media (min-width: 769px) {
    position: absolute;
    top: -12px;
  }
`
