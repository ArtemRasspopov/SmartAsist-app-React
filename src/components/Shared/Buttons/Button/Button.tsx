import React from "react";
import { Wrapper } from "./ButtonStyle";

interface ButtonProps {
  children?: React.ReactNode;
  bgColor?: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, bgColor = "red", type, onClick }: ButtonProps) => {
  return (
    <Wrapper bgColor={bgColor} onClick={onClick} type={type}>
      {children}
    </Wrapper>
  );
};

export default Button;
