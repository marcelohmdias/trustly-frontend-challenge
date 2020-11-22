import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  margin: 0 auto 3.56em;
  padding: 0 1.75em;
  width: calc(100% - 2em);

  @media (max-width: 768px) {
    padding: 0 0.5em;
  }

  @media (max-width: 320px) {
    padding: 0;
  }
`

export const Icon = styled.img`
  margin: 0.875em;
`

export const Input = styled.input`
  border: unset;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 33px;
  outline: none;
  width: calc(100% - 5em);

  &::placeholder {
    color: #a8a8a8;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 1.25em;
    line-height: 27px;
  }

  @media (max-width: 320px) {
    padding: 0;
    font-size: 1.15em;
  }
`
