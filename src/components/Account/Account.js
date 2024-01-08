import { useDispatch, useSelector } from "react-redux";
import sampleAvatar from "../../images/sample-avatar.png";
import { useNavigate } from "react-router-dom";
import { toggleColor } from "../../reducers/appColor";

function Account({ userStatus }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.attributes);
  const appColor = useSelector((state) => state.appColor.appColor);
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={`nav flex justify-center sm:w-1/3 md:w-1/3 gap-2`}>
        {userStatus === false ? (
          <>
            <div
              className="demo-btn text-xs text-white flex items-center font-lato h-10 self-center pl-5 pr-5 rounded-3xl cursor-pointer bg-gray-900 hover:bg-gray-700 active:bg-gray-900"
              onClick={() => navigate("/projects")}
            >
              DEMO
            </div>
            <div className="join-btn text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl cursor-pointer hover:bg-purple-500 active:bg-purple-600">
              JOIN NOW
            </div>
            <label
              className="flex cursor-pointer gap-2 items-center"
              onClick={() => dispatch(toggleColor())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </>
        ) : (
          <div className="nav flex gap-2 items-center">
            <div className="flex self-center h-10 w-10">
              <img
                src={sampleAvatar}
                className="border-gray-900 rounded-full border-2 cursor-pointer hover:animate-rotate-y hover:animate-infinite"
              />
            </div>
            <div className="text-md flex items-center text-lg">
              {user.username}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Account;
