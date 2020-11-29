import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const Card = styled.div`
  &:first-child {
    margin-right: 3em;
  }
`

export const Price = styled.span`
  color: #000000;
  font-family: Open Sans;
  font-size: 2.75em;
  font-style: normal;
  font-weight: normal;
  line-height: 44px;
  white-space: nowrap;
`
