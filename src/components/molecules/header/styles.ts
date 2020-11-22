import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1300px;
  position: relative;
  width: 100%;

  @media (max-width: 800px) {
  }
`

export const AvatarSlot = styled.div`
  position: absolute;
  right: 0;
`

export const ButtonSlot = styled.div`
  left: 0;
  position: absolute;
`
export const TitleSlot = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
