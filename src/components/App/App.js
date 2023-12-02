import Welcome from "../Welcome/Welcome";
import Dashboard from "../Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../reducers/user";
import Header from "../Header/Header";

function App() {
  const dispatch = useDispatch();
  const [userStatus, setUserStatus] = useState(false);
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(setUserData(data.data.attributes["user-data"]));
      // setUser(data.data.attributes["user-data"]);
      // console.log(`useEffect`, user);
    });
  }, []);

  const handleLogin = () => {
    setUserStatus(!userStatus);
    navigate("/projects");
  };

  return (
    <>
      <Header
          userStatus={userStatus}
          // user={user}
          handleLogin={handleLogin}
        />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome />
          }
        ></Route>
        {/* <Route path="/:user_id/:project_id" element={<ProjectBoard userStatus={userStatus} />}></Route> */}
        <Route
          path="/projects"
          element={<Dashboard userStatus={userStatus} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
