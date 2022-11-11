import React from "react";
import Button from "../../Shared/Buttons/Button/Button";
import DropDownMenu from "../../Shared/DropDownMenu/DropDownMenu";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Item,
  ItemInfo,
  List,
  Quantity,
  Title,
  Wrapper,
} from "./TaskSpacesCardStyle";

const TaskSpacesCard = () => {
  const taskSpaces = [
    { title: "My todo", color: "#64D30D", quantity: 8 },
    { title: "Work", color: "#0d8ed3b7", quantity: 10 },
    { title: "Other", color: "#bfd30d8d", quantity: 6 },
  ];

  return (
    <Wrapper>
      <CardWrapper
        title="Task spaces"
        headerButtons={<Button bgColor="#64D30D">Add new</Button>}
      >
        <List>
          {taskSpaces.map((item, index) => (
            <Item color={item.color} key={index}>
              <ItemInfo>
                <Title>{item.title}</Title>
                <Quantity>{item.quantity} tasks</Quantity>
              </ItemInfo>
              <DropDownMenu />
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};

export default TaskSpacesCard;
