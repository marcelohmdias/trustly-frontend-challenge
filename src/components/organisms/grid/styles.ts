import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5.44em 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'Header'
    'Body';
`

export const Header = styled.header`
  grid-area: Header;
  max-width: 100vw;

  @media (max-width: 768px) {
    background-color: #fff;
  }

  @media (min-width: 769px) {
    background-color: #f1f1f1;
  }
`

export const Main = styled.main`
  background-color: #fff;
  grid-area: Body;
  margin: 3em auto 0;
  max-width: 1100px;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 2em;
  }

  @media (max-width: 425px) {
    margin-top: 1.5em;
  }

  @media (max-width: 320px) {
    margin-top: 1em;
  }
`
