import React from "react";
import { Header, HeaderButtons, Inner, Title, Wrapper } from "./CardWrapeprStyle";

interface CardWrapperProps {
  children?: React.ReactNode;
  title: string;
  headerButtons?: React.ReactNode;
}

const CardWrapper = ({ title, children, headerButtons }: CardWrapperProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <HeaderButtons>{headerButtons}</HeaderButtons>
      </Header>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default CardWrapper;
