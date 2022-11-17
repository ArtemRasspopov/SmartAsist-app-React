import { createSlice } from "@reduxjs/toolkit";

type account = {
  title : string,
  type : string,
  imageSrc : string,
  count : number
}

export interface accountsState {
  accounts: account[];
  sum: number;
}

const initialState: accountsState = {
  accounts : [
    {title : 'Default', type : 'BYN', imageSrc: "./images/default-user-icon.png", count : 1200},
    {title : 'Tinkoff', type : 'USD', imageSrc: "./images/default-user-icon.png", count : 100},
    {title : 'Alfa', type : 'USD', imageSrc: "./images/default-user-icon.png", count : 100}
  ],
  sum: 1300
};

export const accountsSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNewAccount: (state, action) => {
      console.log(action.payload);
      state.accounts.push(action.payload)
    },
    removeAccount: (state, action) => {
      console.log(action.payload, 'redux click');
      state.accounts = state.accounts.filter(el => el.title !== action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addNewAccount, removeAccount } = accountsSLice.actions;
export default accountsSLice.reducer;
