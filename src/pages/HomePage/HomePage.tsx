import React from "react";
import InvoiceAmountCard from "../../components/Cards/InvoiceAmountCard/InvoiceAmountCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import GreetingUser from "../../components/Shared/GreetingUser/GreetingUser";
import { Inner, Wrapper } from "./HomePageStyle";

const HomePage = () => {
  return (
    <Wrapper>
      <PageHeader title="Home">
        <GreetingUser />
      </PageHeader>
      <Inner>
        <InvoiceAmountCard />
      </Inner>
    </Wrapper>
  );
};

export default HomePage;
