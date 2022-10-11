import React from "react";
import QuestionButton from "../Shared/Buttons/QuestionButton/QuestionButton";
import Logo from "../Shared/Logo/Logo";
import UserIcon from "../Shared/UserIcon/UserIcon";
import { LogoWrapper, Title, UserWrapper, Wrapper } from "./HeaderStyle";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper href="/">
        <Logo />
        <Title>Smart Asistant</Title>
      </LogoWrapper>
      <UserWrapper>
        <QuestionButton/>
        <UserIcon />
      </UserWrapper>
    </Wrapper>
  );
};

export default Header;
