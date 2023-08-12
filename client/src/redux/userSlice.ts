import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
