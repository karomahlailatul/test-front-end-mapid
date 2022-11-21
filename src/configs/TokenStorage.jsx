import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = process.env.REACT_APP_TOKEN_KEY;

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value: initialStateValue },
  reducers: {
    token: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { token } = tokenSlice.actions;

export default tokenSlice.reducer;
