import React from "react";
import ActivitiesCard from "../../components/Cards/ActivitiesCard/ActivitiesCard";
import CardWrapper from "../../components/Cards/CardWrapper/CardWrapper";
import ExchangeRatesCard from "../../components/Cards/ExchangeRatesCard/ExchangeRatesCard";
import InvoiceAmountCard from "../../components/Cards/InvoiceAmountCard/InvoiceAmountCard";
import QuoteDay from "../../components/Cards/QuoteDayCard/QuoteDay";
import TaskProgressCard from "../../components/Cards/TaskProgressCard/TaskProgressCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import GreetingUser from "../../components/Shared/GreetingUser/GreetingUser";
import { FirstLine, Inner, LineTwo, Wrapper } from "./HomePageStyle";

const HomePage = () => {
  return (
    <Wrapper>
      <PageHeader title="Home">
        <GreetingUser />
      </PageHeader>
      <Inner>
        <FirstLine>
          <InvoiceAmountCard />
          <TaskProgressCard />
          <QuoteDay />
        </FirstLine>
        <LineTwo>
          <ActivitiesCard/>
          <ExchangeRatesCard />
        </LineTwo>
      </Inner>
    </Wrapper>
  );
};

export default HomePage;
