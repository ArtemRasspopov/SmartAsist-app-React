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
    {title : 'Tinkoff', type : 'USD', imageSrc: "./images/default-user-icon.png", count : 100}
  ],
  sum: 1300
};

export const accountsSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = accountsSLice.actions;

export default accountsSLice.reducer;
