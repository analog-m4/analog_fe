import { useSelector } from "react-redux";
import sampleAvatar from "../../images/sample-avatar.png";
import { useNavigate } from "react-router-dom";

function Account({ userStatus }) {
  const user = useSelector((state) => state.user.user.attributes);
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="account nav flex justify-center sm:w-1/3 md:w-1/3 gap-2">
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
