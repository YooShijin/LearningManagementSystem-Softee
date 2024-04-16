import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authorization",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    logInHandler: (state, token) => {
      state.token = token;
    },
    logOutHandler: (state) => {
      state.token = null;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { logInHandler, logOutHandler } = authSlice.actions;

export default authSlice.reducer;
