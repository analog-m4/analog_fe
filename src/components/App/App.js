import Welcome from "../Welcome/Welcome";
import Dashboard from "../Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Projects from "../Projects/Projects";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData().then((data) => {
      setUser(data.data.attributes["user-data"]);
      console.log(`useEffect`, user);
    });
  }, []);

  const handleLogin = () => {
    setUserStatus(!userStatus);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              userStatus={userStatus}
              setUserStatus={setUserStatus}
              user={user}
              handleLogin={handleLogin}
            />
          }
        ></Route>
        <Route path="/:user_id/:project_id" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
