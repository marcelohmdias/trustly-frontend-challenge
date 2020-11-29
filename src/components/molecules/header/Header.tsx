import { Component } from 'react'

import { JSXProps } from '../../../types'
import * as S from './styles'

export default class Header extends Component {
  static avatar({ children }: JSXProps) {
    return <S.AvatarSlot>{children}</S.AvatarSlot>
  }

  static button({ children }: JSXProps) {
    return <S.ButtonSlot>{children}</S.ButtonSlot>
  }

  static title({ children }: JSXProps) {
    return <S.TitleSlot>{children}</S.TitleSlot>
  }

  render() {
    return <S.Wrapper>{this.props.children}</S.Wrapper>
  }
}
