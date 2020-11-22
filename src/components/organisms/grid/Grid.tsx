import { Component } from 'react'

import { WithChildren } from '@/types'

import * as S from './styles'

export default class Grid extends Component {
  static header({ children }: WithChildren) {
    return <S.Header>{children}</S.Header>
  }

  static body({ children }: WithChildren) {
    return <S.Main>{children}</S.Main>
  }

  render() {
    return <S.Container>{this.props.children}</S.Container>
  }
}
