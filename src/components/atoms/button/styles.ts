import styled from 'styled-components'

export const Button = styled.button`
  background: #6b8067;
  border: unset;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  width: 100%;

  &:hover {
    background-color: #7b9277;
  }

  &:disabled {
    background-color: #ced6cc;
  }
`
