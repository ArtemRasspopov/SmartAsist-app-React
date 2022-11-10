import React from "react";
import TransparentAddButton from "../../Shared/Buttons/TransparentAddButton/TransparentAddButton";
import { ButtonWrapper, Count, Text, Wrapper } from "./QuoteDayStyle";

const QuoteDay = () => {
  return (
    <Wrapper>
      <Count>Quote of the day</Count>
      <Text>
        User interaction expert | ant financial service - business group -
        platform department - technology department -UED
      </Text>
      <ButtonWrapper>
        <TransparentAddButton><span>+</span> Add to my collection</TransparentAddButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QuoteDay;
