import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  appColor: "light",
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

export const { setColor } = appColorSlice.actions;

export default appColorSlice.reducer;
