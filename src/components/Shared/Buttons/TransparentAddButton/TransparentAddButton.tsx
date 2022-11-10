import React from "react";
import { Wrapper } from "./TransparentAddButtonStyle";

interface TransparentAddButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TransparentAddButton = ({
  children,
  onClick,
}: TransparentAddButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default TransparentAddButton;
