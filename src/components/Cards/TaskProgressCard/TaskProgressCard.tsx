import React from "react";
import InfoButton from "../../Shared/Buttons/InfoButton/InfoButton";
import { Count, Header, ProgressLine, Wrapper } from "./TaskProgressCardStyle";

const TaskProgressCard = () => {
  return (
    <Wrapper>
      <Header>
        <p>Task progress</p>
        <InfoButton />
      </Header>
      <Count>78%</Count>
      <ProgressLine/>
    </Wrapper>
  );
};

export default TaskProgressCard;
