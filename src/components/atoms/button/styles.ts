import styled from 'styled-components'

export const Button = styled.button`
  background: #6b8067;
  border: unset;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.875em;
  line-height: 19px;
  outline: none;
  padding-bottom: 0.75em;
  padding-top: 0.75em;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #7b9277;
  }

  &:disabled {
    background-color: #ced6cc;
  }
`
