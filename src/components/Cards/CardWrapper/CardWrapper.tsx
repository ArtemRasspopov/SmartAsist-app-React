import React from "react";
import { Header, Inner, Title, Wrapper } from "./CardWrapeprStyle";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
}

const CardWrapper = ({ title, children }: CardWrapperProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
};

export default CardWrapper;
