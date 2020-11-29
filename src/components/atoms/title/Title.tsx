import { StyledComponent } from 'styled-components'

import { JSXProps } from '../../../types'
import * as S from './styles'

type Tag = 'h1' | 'h2' | 'h3'

type TitleProps = {
  tag: Tag
  text: string
}

export default function Title({ tag, text, className }: JSXProps<TitleProps>) {
  const h = tag.toUpperCase()
  const Header = (S as Record<string, StyledComponent<Tag, any, {}, never>>)[h]
  return <Header className={className}>{text}</Header>
}
