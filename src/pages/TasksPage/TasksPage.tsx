import React from "react";
import InProgressTaskCard from "../../components/Cards/InProgressTaskCard/InProgressTaskCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CardsWrapper, Inner, Wrapper } from "./TasksPageStyle";

const TasksPage = () => {
  return (
    <Wrapper>
      <PageHeader title="Tasks" />
      <Inner>
        <InProgressTaskCard />
        <CardsWrapper>
          {/* <InProgressTaskCard />
          <InProgressTaskCard /> */}
        </CardsWrapper>
      </Inner>
    </Wrapper>
  );
};

export default TasksPage;
