import { Component } from 'react'

import { JSXProps } from './../../../types'
import * as S from './styles'

export default class Grid extends Component {
  static header({ children }: JSXProps) {
    return <S.Header>{children}</S.Header>
  }

  static body({ children }: JSXProps) {
    return <S.Main>{children}</S.Main>
  }

  render() {
    return <S.Container>{this.props.children}</S.Container>
  }
}
