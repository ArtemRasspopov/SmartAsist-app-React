export type accountType = {
  id: string;
  title: string;
  type: string;
  imageSrc: string;
  count: number;
};

export type categoriesType = {
  title: string;
};

export type financeActivitiesType = {
  id: string;
  account: string;
  text: string;
  date: string;
  type: "positive" | "negative";
  imageSrc: string;
  price: number;
};

export type newIncomeType = {
  commentValue: string;
  operationNameValue: string;
  selectedAccount: string;
  selectedCategori: string;
  summValue: number;
};
