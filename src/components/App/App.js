import Welcome from "../Welcome/Welcome";
import Dashboard from "../Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../reducers/user";
import { setError } from "../../reducers/error";
import Header from "../Header/Header";
import Error from "../Error/Error";

function App() {
  const dispatch = useDispatch();
  const [userStatus, setUserStatus] = useState(false);
  // const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user.attributes);
  const error = useSelector((state) => state.error.error);
  const appColor = useSelector((state) => state.appColor.appColor);
  console.log(appColor);

  useEffect(() => {
    fetchData()
      .then((data) => {
        console.log(data);
        dispatch(setUserData(data.data));
      })
      .catch((error) => {
        console.error(`Error in Network Request`, error.message);
        dispatch(setError(error.message));
        console.log("getting to after the dispatch");
        // setUser(data.data.attributes["user-data"]);
        // console.log(`useEffect`, user);
      });
  }, []);

  function handleLogin() {
    setUserStatus(!userStatus);
    navigate("/projects");
  }

  return error ? (
    <div className="app-container bg-cream font-lato dark:bg-darkBG">
      <Header
        userStatus={userStatus}
        // user={user}
      />
      <Error />
    </div>
  ) : (
    <div className={appColor}>
      <div className="app-container font-lato bg-cream dark:bg-darkBG dark:text-darkText">
        <Header
          userStatus={userStatus}
          // user={user}
        />
        <Routes>
          <Route
            path="/"
            element={<Welcome handleLogin={handleLogin} />}
          ></Route>
          {/* <Route path="/:user_id/:project_id" element={<ProjectBoard userStatus={userStatus} />}></Route> */}
          <Route
            path="/projects"
            element={<Dashboard userStatus={userStatus} />}
          ></Route>
          <Route
            path="/project/:id"
            element={<Dashboard userStatus={userStatus} />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
