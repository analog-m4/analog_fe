import Welcome from "../Welcome/Welcome";
import Dashboard from "../Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData().then((data) => {
      setUser(data.data.attributes["user-data"]);
      console.log(`useEffect`, user);
    });
  }, []);

  const handleLogin = () => {
    setUserStatus(!userStatus);
    navigate("/projects");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              userStatus={userStatus}
              user={user}
              handleLogin={handleLogin}
            />
          }
        ></Route>
        {/* <Route path="/:user_id/:project_id" element={<Projects />}></Route> */}
        <Route
          path="/projects"
          element={<Dashboard userStatus={userStatus} user={user} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
