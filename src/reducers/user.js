import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    setUserData: (state, action) => {
      const userData = action.payload;
      console.log(userData);
      return { ...state, user: userData };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
