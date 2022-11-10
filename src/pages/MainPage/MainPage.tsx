import React from "react";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import HomePage from "../HomePage/HomePage";
import { Inner, Wrapper } from "./MainPageStyle";
import { Route, Routes } from "react-router-dom";
import InDevelopmentPage from "../InDevelopmentPage/InDevelopmentPage";
import FinancePage from "../FinancePage/FinancePage";
import TasksPage from "../TasksPage/TasksPage";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Inner>
        <SideMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/not-found" element={<InDevelopmentPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Inner>
    </Wrapper>
  );
};

export default MainPage;
