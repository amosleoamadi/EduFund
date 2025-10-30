import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donorFirstname: "",
  donorLastname: "",
  donorEmail: "",
  donorId: "",
  donorToken: "",
};

const donorSlice = createSlice({
  name: "donor",
  initialState,
  reducers: {
    setDonor: (state, action) => {
      return action.payload;
    },

    donorLogout: (state) => {
      state.donorFirstname = "";
      state.donorLastname = "";
      state.donorEmail = "";
      state.donorId = "";
      state.donorToken = "";
    },
  },
});

export const { setDonor, donorLogout } = donorSlice.actions;
export default donorSlice.reducer;
