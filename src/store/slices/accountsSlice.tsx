import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accountType } from "../../types/types";

export interface accountsState {
  accounts: accountType[];
  sum: number;
}

const initialState: accountsState = {
  accounts: [
    {
      id: "Default123",
      title: "Default",
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
      const deletedItemCount = state.accounts.find(
        (item) => item.id === action.payload
      )?.count;
      if (deletedItemCount) {
        state.sum -= deletedItemCount;
      }
      state.accounts = state.accounts.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewAccount, removeAccount } = accountsSLice.actions;
export default accountsSLice.reducer;
