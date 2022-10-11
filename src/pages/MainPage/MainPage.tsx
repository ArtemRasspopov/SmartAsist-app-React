import React from "react";
import Container from "../../components/SharedComponents/Container/Container";
import Logo from "../../components/SharedComponents/Logo/Logo";
import { Wrapper } from "./MainPageStyle";

const MainPage = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
