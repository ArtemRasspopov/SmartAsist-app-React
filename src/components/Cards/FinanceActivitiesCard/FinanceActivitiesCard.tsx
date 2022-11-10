import React from "react";
import Button from "../../Shared/Buttons/Button/Button";
import RemoveButton from "../../Shared/Buttons/RemoveButton/RemoveButton";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Item,
  ItemIcon,
  ItemText,
  Link,
  List,
  MoreButtonWrapper,
  Wrapper,
} from "./FinanceActivitiesCardStyle";

const FinanceActivitiesCard = () => {
  const ActivitiesData = [
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
      type: "positive",
      price: 12000,
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
      type: "negative",
      price: 12000,
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
      type: "negative",
      price: 12000,
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
      type: "positive",
      price: 12000,
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
      type: "positive",
      price: 12000,
    },
  ];

  return (
    <Wrapper>
      <CardWrapper title="Finance activities">
        <List>
          {ActivitiesData.map((item, index) => (
            <Item key={index}>
              <Link>
                <ItemIcon src={item.icon} alt="icon" />
                <ItemText>
                  {item.text}
                  <span>{item.date}</span>
                </ItemText>
                <span>
                  {item.type === "positive" ? "+" : "-"} {item.price} $
                </span>
                <RemoveButton/>
              </Link>
            </Item>
          ))}
        </List>
        <MoreButtonWrapper>
          <Button bgColor="#1890FF">View all</Button>
        </MoreButtonWrapper>
      </CardWrapper>
    </Wrapper>
  );
};

export default FinanceActivitiesCard;
