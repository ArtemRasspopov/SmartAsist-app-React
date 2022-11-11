import React from "react";
import AddTaskCard from "../../components/Cards/AddTaskCard/AddTaskCard";
import InProgressTaskCard from "../../components/Cards/InProgressTaskCard/InProgressTaskCard";
import TaskSpacesCard from "../../components/Cards/TaskSpacesCard/TaskSpacesCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CardsWrapper, Inner, Wrapper } from "./TasksPageStyle";

const TasksPage = () => {
  return (
    <Wrapper>
      <PageHeader title="Tasks" />
      <Inner>
        <CardsWrapper>
          <TaskSpacesCard />
          <AddTaskCard/>
        </CardsWrapper>
        <InProgressTaskCard />
      </Inner>
    </Wrapper>
  );
};

export default TasksPage;
