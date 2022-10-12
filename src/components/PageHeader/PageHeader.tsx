import React from 'react'
import BreadCrambs from '../Shared/BreadCrambs/BreadCrambs'
import { Title, Wrapper } from './PageHeaderStyle'

interface PageHeaderProps {
  title : string
  children : React.ReactNode
}

const PageHeader = ({title, children} : PageHeaderProps) => {
  return (
    <Wrapper>
      <BreadCrambs/>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

export default PageHeader