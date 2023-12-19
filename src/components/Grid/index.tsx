import * as React from 'react'
import { Content, Wrapper } from './Grid.styles'

type GridProps = {
  header: string
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
)

export default Grid
