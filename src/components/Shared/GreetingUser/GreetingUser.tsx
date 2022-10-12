import React from "react";
import {
  GrettingWrapper,
  StatisticsCount,
  StatisticsItem,
  StatisticsList,
  Text,
  Title,
  UserIcon,
  Wrapper,
} from "./GreetingUserStyle";

const GreetingUser = () => {
  return (
    <Wrapper>
      <UserIcon path={"./images/default-user-icon.png"} />
      <GrettingWrapper>
        <Title>Good morning, Serati Ma, have a great day!</Title>
        <Text>
          User interaction expert | ant financial service - business group -
          platform department - technology department -UED
        </Text>
      </GrettingWrapper>
      <StatisticsList>
        <StatisticsItem>
          <p>Days</p>
          <StatisticsCount>30</StatisticsCount>
        </StatisticsItem>
        <StatisticsItem>
          <p>Operations</p>
          <StatisticsCount>8</StatisticsCount>
        </StatisticsItem>
        <StatisticsItem>
          <p>Expenses</p>
          <StatisticsCount>2,233$</StatisticsCount>
        </StatisticsItem>
      </StatisticsList>
    </Wrapper>
  );
};

export default GreetingUser;
