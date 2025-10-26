import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: {
    firstname: "",
    lastname: "",
    email: "",
    studentId: "",
    studentToken: "",
  },
};

const studentauthSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, { payload }) => {
      state.students.firstname = payload;
      state.students.lastname = payload;
      state.students.email = payload;
      state.students.studentId = payload;
      state.students.studentToken = payload;
    },

    studentLogout: (state) => {
      state.students.firstname = "";
      state.students.lastname = "";
      state.students.email = "";
      state.students.studentId = "";
      state.students.studentToken = "";
    },
  },
});

export const { setStudent, studentLogout } = studentauthSlice.actions;
export default studentauthSlice.reducer;
