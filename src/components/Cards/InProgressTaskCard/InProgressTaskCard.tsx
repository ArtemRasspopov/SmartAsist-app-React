import React from "react";
import StarButton from "../../Shared/Buttons/StarButton/StarButton";
import UrnButton from "../../Shared/Buttons/UrnButton/UrnButton";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Date,
  Item,
  ItemsBottom,
  ItemInfo,
  ItemText,
  List,
  Wrapper,
} from "./InProgressTaskCardStyle";

const InProgressTaskCard = () => {
  const tasksList = [
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      datе: "7 days ago",
      isImportant: false,
      checked: true,
    },
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer.",
      datе: "7 days ago",
      isImportant: false,
      checked: false,
    },
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer.",
      datе: "7 days ago",
      isImportant: false,
      checked: true,
    },
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer.",
      datе: "7 days ago",
      isImportant: false,
      checked: true,
    },
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer.",
      datе: "7 days ago",
      isImportant: false,
      checked: false,
    },
    {
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer.",
      datе: "7 days ago",
      isImportant: false,
      checked: false,
    },
  ];

  return (
    <Wrapper>
      <CardWrapper title="Tasks">
        <List>
          {tasksList.map((item, index) => (
            <Item key={index}>
              <ItemInfo>
                <ItemText checked={item.checked}>{item.text}</ItemText>
                <ItemsBottom>
                  <Date>{item.datе}</Date>
                  <StarButton />
                  <UrnButton />
                </ItemsBottom>
              </ItemInfo>
              <input type="checkbox" checked={item.checked} />
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};

export default InProgressTaskCard;
