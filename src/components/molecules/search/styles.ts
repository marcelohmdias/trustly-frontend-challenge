import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  margin: 0 auto 1.75em;
  padding: 0 0.5em;
  width: calc(100% - 2em);

  @media (min-width: 769px) {
    margin: 0 auto 2.5em;
    padding: 0 1.75em;
  }
`

export const Icon = styled.img`
  margin: 0.875em;
`

export const Input = styled.input`
  border: unset;
  font-family: Open Sans;
  font-size: 1.25em;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
  outline: none;
  width: calc(100% - 5em);

  &::placeholder {
    color: #a8a8a8;
    text-align: center;
  }

  @media (min-width: 769px) {
    font-size: 1.5em;
    line-height: 33px;
  }
`
