import React from "react";
import { Wrapper } from "./ContainerStyle";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
