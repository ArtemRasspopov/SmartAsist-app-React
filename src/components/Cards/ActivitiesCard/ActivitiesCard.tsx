import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Item, ItemIcon, ItemText, Link, List, Wrapper } from "./ActivitiesCardStyle";

const ActivitiesCard = () => {
  const ActivitiesData = [
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
    },
    {
      icon: "./images/default-user-icon.png",
      text: "Ridiculus tempus vitae lectus blandit vulputate dolor integer natoque augue.",
      date: "7 days ago",
    },
  ];

  return (
    <Wrapper>
      <CardWrapper title="Activities">
        <List>
          {ActivitiesData.map((item, index) => (
            <Item key={index}>
              <Link>
                <ItemIcon src={item.icon} alt="icon" />
                <ItemText>
                  {item.text}
                  <span>{item.date}</span>
                </ItemText>
              </Link>
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};

export default ActivitiesCard;
