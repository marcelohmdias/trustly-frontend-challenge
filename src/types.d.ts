import React from 'react'

interface Props extends React.HTMLAttributes<any> {}

type WithChildren = {
  children?: React.ReactNode
}

export type JSXProps<T = {}> = T & Props & WithChildren
