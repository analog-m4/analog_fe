import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: {},
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
    updateTask: (state, action) => {
      const { project_id, task_id, modifiedTask } = action.payload;

      // Find the project by project_id
      const project = state.projects.find((proj) => proj.id === project_id);

      if (project) {
        // Find the task by task_id in the project
        const updatedTasks = project.tasks.map((task) =>
          task.id === task_id ? modifiedTask : task
        );

        // Update the project with the modified tasks
        const updatedProject = { ...project, tasks: updatedTasks };

        // Update the state with the modified project
        return {
          ...state,
          projects: state.projects.map((proj) =>
            proj.id === project_id ? updatedProject : proj
          ),
        };
      }

      // Return the state unchanged if the project or task is not found
      return state;
    },
  },
});

export const { setUserData, updateTask } = userSlice.actions;

export default userSlice.reducer;
