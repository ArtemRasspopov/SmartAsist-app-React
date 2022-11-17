import React from "react";
import { Wrapper } from "./ButtonStyle";

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, bgColor = "red", onClick }: ButtonProps) => {
  return (
    <Wrapper bgColor={bgColor} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
