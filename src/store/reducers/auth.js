import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogined: false },
  reducers: {
    LOGIN(state, action) {
      state.isLogined = action.payload;
    },
    LOGOUT(state, action) {
      state.isLogined = action.payload;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
