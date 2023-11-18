import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isAuth: "",
    name: "",
    email: "",
    number: "",
    address: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { createUser, clearUser } = userSlice.actions;
export const getUser = (state) => state.user.user;

export default userSlice.reducer;
