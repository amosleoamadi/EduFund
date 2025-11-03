import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  studentId: "",
  studentToken: "",
};

const studentauthSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.studentId = action.payload.studentId;
      state.studentToken = action.payload.studentToken;
    },

    studentLogout: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.studentId = "";
      state.studentToken = "";
    },
  },
});

export const selectStudentId = (state) => state.student.studentId;
export const selectStudentEmail = (state) => state.student.email;
export const selectStundentToken = (state) => state.student.studentToken;
export const studentFirstname = (state) => state.student.firstname;
export const studentLastname = (state) => state.student.lastname;
export const { setStudent, studentLogout } = studentauthSlice.actions;
export default studentauthSlice.reducer;
