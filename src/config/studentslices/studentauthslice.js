import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  studentId: "",
  studentToken: "",
  role: "",
};

const studentauthSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      return action.payload;
    },

    studentLogout: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.studentId = "";
      state.studentToken = "";
      state.role = "";
    },
  },
});

export const selectStudentId = (state) => state.student.studentId;
export const selectStudentEmail = (state) => state.student.email;
export const { setStudent, studentLogout } = studentauthSlice.actions;
export default studentauthSlice.reducer;
