import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  accountType,
  financeActivitiesType,
  newIncomeType,
} from "../../types/types";

export interface accountsState {
  accounts: accountType[];
  sum: number;
  financeActivities: financeActivitiesType[];
}

const initialState: accountsState = {
  accounts: [
    {
      id: "cash332212",
      title: "Сash",
      type: "BYN",
      imageSrc: "./images/default-user-icon.png",
      count: 1200,
    },
    {
      id: "Tinkoff321",
      title: "Tinkoff",
      type: "USD",
      imageSrc: "./images/default-user-icon.png",
      count: 100,
    },
    {
      id: "Alfa321",
      title: "Alfa",
      type: "USD",
      imageSrc: "./images/default-user-icon.png",
      count: 100,
    },
  ],
  sum: 1400,
  financeActivities: [
    {
      id: "23232",
      account: "alfa",
      imageSrc: "./images/default-user-icon.png",
      text: "bought groceries",
      date: "7 days ago",
      type: "positive",
      price: 12000,
    },
    {
      id: "2322",
      account: "alfa",
      imageSrc: "./images/default-user-icon.png",
      text: "netflix payment",
      date: "7 days ago",
      type: "negative",
      price: 50,
    },
    {
      id: "2323002",
      account: "alfa",
      imageSrc: "./images/default-user-icon.png",
      text: "car repair",
      date: "7 days ago",
      type: "positive",
      price: 12000,
    },
  ],
};

export const accountsSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNewAccount: (state, action: PayloadAction<accountType>) => {
      state.accounts.push(action.payload);
      state.sum += action.payload.count;
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      const deletedItem = state.accounts.find((item) =>
        item.id === action.payload ? item : ""
      );

      const date = new Date();
      const newActivity: financeActivitiesType = {
        id: `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
        account: action.payload,
        imageSrc: "./images/default-user-icon.png",
        text: `${deletedItem?.title} wallet deleted`,
        date: "7 days ago",
        type: "negative",
        price: deletedItem ? deletedItem.count : 0,
      };
      state.financeActivities.unshift(newActivity);

      if (deletedItem?.count) {
        state.sum -= deletedItem.count;
      }
      state.accounts = state.accounts.filter((el) => el.id !== action.payload);
    },
    addNewIncome: (state, action: PayloadAction<newIncomeType>) => {
      state.accounts.find((item) =>
        item.title === action.payload.selectedAccount
          ? (item.count += action.payload.summValue)
          : ""
      );
      const date = new Date();
      const newActivity: financeActivitiesType = {
        id: `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
        account: action.payload.selectedAccount,
        imageSrc: "./images/default-user-icon.png",
        text: action.payload.operationNameValue,
        date: "7 days ago",
        type: "positive",
        price: action.payload.summValue,
      };
      state.financeActivities.unshift(newActivity);
    },
    removeActivity: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.financeActivities = state.financeActivities.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewAccount, removeAccount, addNewIncome, removeActivity } =
  accountsSLice.actions;
export default accountsSLice.reducer;
