import React from "react";
import UrnIcon from "../../../SvgIcons/UrnIcon";
import { Wrapper } from "./UrnButtonStyle";

interface UrnButtonProps {
  onClick?: () => void;
}

const UrnButton = ({ onClick }: UrnButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      <UrnIcon />
    </Wrapper>
  );
};

export default UrnButton;
