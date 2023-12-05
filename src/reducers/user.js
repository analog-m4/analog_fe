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
    addTaskToProject: (state, action) => {
      const { newTask, selectedProject } = action.payload;
      console.log("New Task:", newTask);
      console.log("Selected Project:", selectedProject);
      
      const updatedProjects = state.user.projects.map((project) => {
        if (project.project_id === selectedProject.project_id) {
          return { ...project, tasks: [...project.tasks, newTask] };
        }
        return project;
      });

      console.log("Updated Projects:", updatedProjects);

      return { ...state, user: { ...state.user, projects: updatedProjects } };
    },
  },
})

export const { setUserData, addProjectToUser, addTaskToProject } = userSlice.actions;

export default userSlice.reducer;
