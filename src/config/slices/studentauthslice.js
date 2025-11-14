import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  userId: "",
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.userToken = action.payload.userToken;
    },

    userLogout: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.userId = "";
      state.userToken = "";
    },
  },
});

export const selectStudentId = (state) => state.user.userId;
export const selectStudentEmail = (state) => state.user.email;
export const selectStundentToken = (state) => state.user.userToken;
export const studentFirstname = (state) => state.user.firstname;
export const studentLastname = (state) => state.user.lastname;
export const selectIsAuthenticated = (state) => !!state.user.userToken;
export const { setUserState, userLogout } = userSlice.actions;
export default userSlice.reducer;
