import { Component } from 'react'

import { WithChildren } from '@/types'

import * as S from './styles'

export default class Header extends Component {
  static avatar({ children }: WithChildren) {
    return <S.AvatarSlot>{children}</S.AvatarSlot>
  }

  static button({ children }: WithChildren) {
    return <S.ButtonSlot>{children}</S.ButtonSlot>
  }

  static title({ children }: WithChildren) {
    return <S.TitleSlot>{children}</S.TitleSlot>
  }

  render() {
    return <S.Wrapper>{this.props.children}</S.Wrapper>
  }
}
