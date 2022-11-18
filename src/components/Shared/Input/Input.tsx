import React from 'react'
import { Wrapper } from './InputStyle'

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder? : string | undefined;
  value?: string;
  onChange?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type = 'text', placeholder, value, onChange}) => {
  return (
    <Wrapper type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input