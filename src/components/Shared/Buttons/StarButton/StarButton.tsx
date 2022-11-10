import React from "react";
import StarIcon from "../../../SvgIcons/StarIcon";
import { Wrapper } from "./StarButtonStyle";

interface StarButtonProps {
  onClick?: () => void;
}

const StarButton = ({ onClick }: StarButtonProps) => {
  return (
    <Wrapper onClick={onClick}>
      <StarIcon />
    </Wrapper>
  );
};

export default StarButton;
