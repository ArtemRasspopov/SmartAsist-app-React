import React from "react";
import { LogoIcon } from "../../SvgIcons/LogoIcon";
import { Inner } from "./LogoStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Logo = () => {
  const theme = useSelector((state: RootState) => state.themeSlice.theme);

  return (
    <Inner theme={theme} href={"/"}>
      <LogoIcon />
    </Inner>
  );
};

export default Logo;
