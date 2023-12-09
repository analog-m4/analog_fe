import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  error: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState: initialStateValue,
  reducers: {
    setError: (state, action) => {
      console.log("getting here");
      console.log("payload", action.payload);
      const errorMessage = action.payload;
      console.log("setError ran", errorMessage);
      return { ...state, error: errorMessage };
    },
    clearError: (state) => {
      return { ...state, error: "" };
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
