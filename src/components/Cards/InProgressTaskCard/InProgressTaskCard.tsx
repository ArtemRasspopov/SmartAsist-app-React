import React from "react";
import StarButton from "../../Shared/Buttons/StarButton/StarButton";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Date,
  Item,
  ItemBottom,
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
      checked: true,
    },
  ];

  return (
    <Wrapper>
      <CardWrapper title="In progress">
        <List>
          {tasksList.map((item, index) => (
            <Item key={index}>
              <ItemInfo>
                <ItemText>{item.text}</ItemText>
                <ItemBottom>
                  <Date>
                    {item.datе}
                    <StarButton/>
                  </Date>
                </ItemBottom>
              </ItemInfo>
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};

export default InProgressTaskCard;
