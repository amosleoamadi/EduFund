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
      state.donorFirstname = action.payload.donorFirstname;
      state.donorLastname = action.payload.donorLastname;
      state.donorEmail = action.payload.donorEmail;
      state.donorId = action.payload.donorId;
      state.donorToken = action.payload.donorToken;
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

export const selectDonorToken = (state) => state.donor.donorToken;
export const { setDonor, donorLogout } = donorSlice.actions;
export default donorSlice.reducer;
