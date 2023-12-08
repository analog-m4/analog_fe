import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  error: "",
};

export const userSlice = createSlice({
  name: "error",
  initialState: initialStateValue,
  reducers: {
    setError: (state, action) => {
      const errorData = action.payload;
      console.log("setError ran", errorData);
      return { ...state, error: errorData };
    },
  },
});
