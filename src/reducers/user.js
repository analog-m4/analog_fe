import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: {
    projects: [
      {
      tasks: [],
      }
    ],
  },
  selectedProject: null,
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
      const newTask = action.payload;
      console.log("new task", newTask);
      
      if (state.selectedProject) {
        const updatedProjects = state.user.projects.map((project) => {
          if (project.project_id === state.selectedProject) {
            return { ...project, tasks: [...project.tasks, newTask] };
          }
          return project;
        });

        return { ...state, user: { ...state.user, projects: updatedProjects } };
      }

      return state;
    },
    setSelectedProject: (state, action) => {
      const selectedProject = action.payload;
      return { ...state, selectedProject };
    },
  },
})

export const { setUserData, addProjectToUser, addTaskToProject, setSelectedProject } = userSlice.actions;

export default userSlice.reducer;
