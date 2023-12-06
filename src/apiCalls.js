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
