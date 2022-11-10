import React from 'react'
import { Wrapper } from './InputStyle'

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder? : string | undefined;
  value?: string;
  onChange: (value : string) => void;
}

const Input = ({type = 'text', placeholder, value, onChange} : InputProps) => {
  return (
    <Wrapper type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)}/>
  )
}

export default Input