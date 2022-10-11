import React from "react";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import InDevelopmentPage from "../InDevelopmentPage/InDevelopmentPage";
import { Inner, Wrapper } from "./MainPageStyle";

const MainPage = () => {
  return (
    <Wrapper>
      <Header/>
      <Inner>
        <SideMenu/>
        <InDevelopmentPage/>
      </Inner>
    </Wrapper>
  );
};

export default MainPage;
