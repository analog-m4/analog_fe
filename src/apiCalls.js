import { setUserData } from "./reducers/user";
import { useDispatch } from "react-redux";

export const fetchData = () => {
  // return fetch(`https://66bd0f8d-570b-453b-9987-71e98b3d8338.mock.pstmn.io`) // Postman Mock Server
  return fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data.`);
    }
    // dispatch to clear state of error here
    return response.json();
  });
  // .catch((error) => {
  //   console.error(`Error in Network Request`, error);
  //   // dispatch to set state of error appropriately here
  //   throw error;
  // });
};

export const postProject = (
  userId,
  title,
  description,
  color,
  deadline,
  dispatch
) => {
  fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        color: color,
        deadline: deadline,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to POST`);
      }
      fetchData().then((data) => {
        dispatch(setUserData(data.data));
      });
    })
    .catch((error) => {
      console.error(`Error in Network Request`, error);
    });
};

export const postTask = (
  userId,
  projectId,
  title,
  description,
  priority,
  taskStatus,
  dispatch
) => {
  fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/${projectId}/tasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        priority: priority,
        status: taskStatus,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to POST`);
      }
      fetchData().then((data) => {
        dispatch(setUserData(data.data));
      });
    })
    .catch((error) => {
      console.error(`Error in Network Request`, error);
    });
};

export const patchTask = (
  userId,
  projectId,
  taskId,
  title,
  description,
  priority,
  taskStatus,
  dispatch
) => {
  fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/${projectId}/tasks/${taskId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        priority: priority,
        status: taskStatus,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to PATCH`);
      }
      fetchData().then((data) => {
        dispatch(setUserData(data.data));
      });
    })
    .catch((error) => {
      console.error(`Error in Network Request`, error);
    });
};


