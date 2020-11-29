import styled from 'styled-components'

export const Timeline = styled.ul`
  align-items: center;
  display: none;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto 5.5em;
  max-width: 850px;

  @media (min-width: 769px) {
    display: flex;
  }
`

export const Status = styled.li`
  display: flex;
  justify-content: center;
  border-top: 2px solid #e8e8e8;
  position: relative;
  width: 100%;

  &:first-child {
    justify-content: start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`

export const Marker = styled.span`
  width: 1em;
  height: 1em;
  background-color: #e8e8e8;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
  position: absolute;
  top: -11px;
  left: calc(50% - 0.5em);

  &.first {
    left: 0;
  }

  &.last {
    left: unset;
    right: 0;
  }

  &.completed {
    background-color: #61cb46;
    border: 1px solid #61cb46;
  }
`

export const Label = styled.span`
  margin-top: 1em;
  position: absolute;

  &.first {
    left: -3.5%;
  }

  &.last {
    left: unset;
    right: -7%;
  }
`
