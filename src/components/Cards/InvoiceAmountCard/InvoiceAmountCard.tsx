import React from "react";
import InfoButton from "../../Shared/Buttons/InfoButton/InfoButton";
import { Count, Header, Info, Wrapper } from "./InvoiceAmountCardStyle";

const InvoiceAmountCard = () => {
  return (
    <Wrapper>
      <Header>
        <p>Amount on accounts</p>
        <InfoButton />
      </Header>
      <Count>$ 126,560</Count>
      <Info>savings compared to last month 12%</Info>
    </Wrapper>
  );
};

export default InvoiceAmountCard;
