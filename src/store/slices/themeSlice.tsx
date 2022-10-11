import { createSlice } from "@reduxjs/toolkit";
const localTheme = JSON.parse(localStorage.getItem("exlabTheme") || "{}");

export interface themeSliceState {
  theme: string;
}

const initialState: themeSliceState = {
  theme: localTheme === "object" ? "black" : localTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme === "black"
        ? localStorage.setItem("exlabTheme", JSON.stringify("white"))
        : localStorage.setItem("exlabTheme", JSON.stringify("black"));
      state.theme = JSON.parse(localStorage.getItem("exlabTheme") || "{}")
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
