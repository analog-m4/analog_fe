import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: {
    projects: [
      {
        tasks: [],
      },
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
      console.log("setUserData ran", userData);
      return { ...state, user: userData };
    },
    // addProjectToUser: (state, action) => {
    //   const newProject = action.payload;
    //   return {
    //     ...state,
    //     user: { ...state.user, projects: [...state.user.projects, newProject] },
    //   };
    // },
    // addTaskToProject: (state, action) => {
    //   const newTask = action.payload;
    //   console.log("new task", newTask);

    //   if (state.selectedProject) {
    //     const updatedProjects = state.user.projects.map((project) => {
    //       if (project.id === state.selectedProject) {
    //         return { ...project, tasks: [...project.tasks, newTask] };
    //       }
    //       return project;
    //     });

    //     return { ...state, user: { ...state.user, projects: updatedProjects } };
    //   }

    //   return state;
    // },
    setSelectedProject: (state, action) => {
      const selectedProject = action.payload;
      return { ...state, selectedProject };
    },
    // updateTask: (state, action) => {
    //   const { project_id, task_id, modifiedTask } = action.payload;

    //   const projectIndex = state.user.projects.findIndex(
    //     (proj) => proj.project_id === project_id
    //   );

    //   if (projectIndex !== -1) {
    //     const project = state.user.projects[projectIndex];

    //     const taskIndex = project.tasks.findIndex(
    //       (task) => task.task_id === task_id
    //     );

    //     if (taskIndex !== -1) {
    //       const updatedTasks = [...project.tasks];
    //       updatedTasks[taskIndex] = {
    //         ...project.tasks[taskIndex],
    //         ...modifiedTask,
    //       };

    //       const updatedProject = {
    //         ...project,
    //         tasks: updatedTasks,
    //       };

    //       const updatedUser = {
    //         ...state.user,
    //         projects: [
    //           ...state.user.projects.slice(0, projectIndex),
    //           updatedProject,
    //           ...state.user.projects.slice(projectIndex + 1),
    //         ],
    //       };

    //       return {
    //         ...state,
    //         user: updatedUser,
    //       };
    //     }
    //   }
    //   return state;
    // },
  },
});

export const {
  setUserData,
  addProjectToUser,
  addTaskToProject,
  setSelectedProject,
  updateTask,
} = userSlice.actions;

export default userSlice.reducer;
