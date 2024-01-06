import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  appColor: "dark",
};

export const appColorSlice = createSlice({
  name: "appColor",
  initialState: initialStateValue,
  reducers: {
    toggleColor: (state) => {
      return {
        ...state,
        appColor: state.appColor === "light" ? "dark" : "light",
      };
    },
  },
});

export const { toggleColor } = appColorSlice.actions;

export default appColorSlice.reducer;
