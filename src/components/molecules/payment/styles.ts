import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 1em;
`

export const ImgContainer = styled.div`
  border-radius: 0.65em;
  display: none;
  overflow: hidden;
  width: 40%;

  @media (min-width: 769px) {
    display: initial;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5);
`

export const Container = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    width: calc(60% - 2.5em);
  }

  @media (min-width: 1025px) {
    width: calc(60% - 3.75em);
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 1em;

    @media (min-width: 769px) {
      display: none;
    }
  }
`
