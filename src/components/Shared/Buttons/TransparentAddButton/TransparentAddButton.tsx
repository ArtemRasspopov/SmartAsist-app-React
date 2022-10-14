import React from 'react'
import { Wrapper } from './TransparentAddButtonStyle'

interface TransparentAddButtonProps {
  title : string
}

const TransparentAddButton = ({title} : TransparentAddButtonProps) => {
  return (
    <Wrapper>
      <span>+</span> {title}
    </Wrapper>
  )
}

export default TransparentAddButton