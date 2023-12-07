export const fetchData = () => {
  // return fetch(`https://66bd0f8d-570b-453b-9987-71e98b3d8338.mock.pstmn.io`)
  return fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data.`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(`Error in Network Request`, error);
    });
};


export const postProject = (userId, title, description = "", color = "#7C3AED", deadline = "") => {
  return fetch(
    `https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/`,
    
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user_id: userId,
        title: title,
        description: description,
        color: color,
        deadline: deadline,
    })
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Failed to POST`)
    }
  })
  .catch((error) => {
    console.error(`Error in Network Request`, error);
  });
};

export const postTask = (projectId, title, description, priority = "") => {
  return fetch(`https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/${projectId}/tasks`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        project_id: projectId,
        title: title,
        description: description,
        priority: priority,
    })
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Failed to POST`)
    }
  })
  .catch((error) => {
    console.error(`Error in Network Request`, error);
  });
}

export const patchTask = (projectId, title, description, priority) => {
  return fetch(`https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/${userId}/projects/${projectId}/tasks`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        project_id: projectId,
        title: title,
        description: description,
        priority: priority,
    })
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`Failed to PATCH`)
    }
  })
  .catch((error) => {
    console.error(`Error in Network Request`, error);
  });
}