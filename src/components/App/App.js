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
  }, [handleLogin]);

  function handleLogin() {
    setUserStatus(!userStatus);
    navigate("/projects");
  }
  return (
    <div className="bg-cream font-lato">
      <Header
        userStatus={userStatus}
        // user={user}
      />
      <Routes>
        <Route path="/" element={<Welcome handleLogin={handleLogin} />}></Route>
        {/* <Route path="/:user_id/:project_id" element={<ProjectBoard userStatus={userStatus} />}></Route> */}
        <Route
          path="/projects"
          element={<Dashboard userStatus={userStatus} />}
        ></Route>
        <Route
          path="/project/:id"
          element={<Dashboard userStatus={userStatus} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
