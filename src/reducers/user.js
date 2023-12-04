import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: {
    projects: [
      {
      tasks: [],
      }
    ],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    setUserData: (state, action) => {
      const userData = action.payload;
      console.log(userData);
      return { ...state, user: userData };
    },
    addProjectToUser: (state, action) => {
      const newProject = action.payload;
      return { ...state, user: { ...state.user, projects: [...state.user.projects, newProject ]}}
    },
    addTaskToUser: (state, action) => {
      const newTask = action.payload;
      const updatedProjects = state.user.projects.map((project) => ({
        ...project,
        tasks: [...project.tasks, newTask],
      }))
      return { ...state, user: { ...state.user, projects: updatedProjects } };
    },
  },
});

export const { setUserData, addProjectToUser, addTaskToUser } = userSlice.actions;

export default userSlice.reducer;
