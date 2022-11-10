import React from 'react'
import RemoveIcon from '../../../SvgIcons/RemoveIcon'
import { Wrapper } from './RemoveButtonStyle'

interface RemoveButtonProps { 
  onClick?: () => void;
}

const RemoveButton = ({onClick} : RemoveButtonProps) => {
  return (
    <Wrapper onClick={onClick}><RemoveIcon/></Wrapper>
  )
}

export default RemoveButton