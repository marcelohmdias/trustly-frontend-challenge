import styled from 'styled-components'

export const Card = styled.li`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: show;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin: 0 auto 3.5em;
  position: relative;
  transition: display 1s ease;
  width: 18.57em;
  will-change: contents;

  @keyframes show {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
      position: initial;
      visibility: visible;
    }
  }
`

export const CardFooter = styled.div`
  margin: 0 0.75em 1em;
`

export const CardImage = styled.img`
  margin-bottom: 1.25em;
`

export const CardOptions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.25em;
`

export const CardPrice = styled.h3`
  align-items: center;
  color: #000000;
  display: flex;
  font-family: Open Sans;
  font-size: 1.31em;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  line-height: 18px;
  margin-bottom: 0.75em;
`

export const CardTitle = styled.h2`
  align-items: center;
  color: #000;
  display: flex;
  font-family: Open Sans;
  font-size: 1.25em;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  line-height: 18px;
  margin-bottom: 1em;
`
