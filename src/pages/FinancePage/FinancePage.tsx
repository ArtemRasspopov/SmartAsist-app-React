import React from "react";
import FinanceActivitiesCard from "../../components/Cards/FinanceActivitiesCard/FinanceActivitiesCard";
import MyAccountsCard from "../../components/Cards/MyAccountsCard/MyAccountsCard";
import NewOperationCard from "../../components/Cards/NewOperationCard/NewOperationCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Inner, Wrapper } from "./FinancePageStyle";

const FinancePage = () => {
  return (
    <Wrapper>
      <PageHeader title="Finance" />
      <Inner>
        <NewOperationCard />
        <MyAccountsCard />
        <FinanceActivitiesCard />
      </Inner>
    </Wrapper>
  );
};

export default FinancePage;
