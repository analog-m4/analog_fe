import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  error: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState: initialStateValue,
  reducers: {
    setError: (state, action) => {
      console.log("getting to setError");
      const errorData = action.payload;
      console.log("setError ran", errorData);
      return { ...state, error: errorData };
    },
    clearError: (state) => {
      return { ...state, error: "" };
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
