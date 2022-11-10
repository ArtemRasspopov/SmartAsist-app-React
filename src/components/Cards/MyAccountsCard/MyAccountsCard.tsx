import React from "react";
import Button from "../../Shared/Buttons/Button/Button";
import RemoveButton from "../../Shared/Buttons/RemoveButton/RemoveButton";
import { List } from "../ActivitiesCard/ActivitiesCardStyle";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Item,
  Wrapper,
  UserIcon,
  Text,
  Count,
  Info,
  Inner,
} from "./MyAccountsCardStyle";

const MyAccountsCard = () => {
  const accounts = [
    {
      title: "Tinkoff",
      imageSrc: "./images/default-user-icon.png",
      count: "1200",
    },
    {
      title: "Tinkoff",
      imageSrc: "./images/default-user-icon.png",
      count: "1200",
    },
    {
      title: "Tinkoff",
      imageSrc: "./images/default-user-icon.png",
      count: "1200",
    },
    {
      title: "Tinkoff",
      imageSrc: "./images/default-user-icon.png",
      count: "1200",
    },
  ];

  return (
    <Wrapper>
      <CardWrapper
        title="My Accounts"
        headerButtons={<Button bgColor="#64D30D">Add account</Button>}
      >
        <Inner>
          <List>
            {accounts.map((item, index) => (
              <Item key={index}>
                <UserIcon src={item.imageSrc} alt="user-icon" />
                <Text>{item.title}</Text>
                <Count>{item.count} $</Count>
                <RemoveButton />
              </Item>
            ))}
          </List>
          <Info>Amount : 12500 $</Info>
        </Inner>
      </CardWrapper>
    </Wrapper>
  );
};

export default MyAccountsCard;