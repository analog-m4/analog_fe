import { useSelector } from "react-redux";
import sampleAvatar from "../../images/sample-avatar.png";

function Account({ userStatus, handleLogin }) {
  const user = useSelector((state) => state.user.user.attributes);

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="nav flex sm:w-1/4 md:w-1/6 justify-center">
        {userStatus === false ? (
          <>
            <div className="join-btn text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl cursor-pointer hover:bg-purple-500">
              JOIN NOW
            </div>
          </>
        ) : (
          <div className="nav flex gap-2 items-center">
            <div className="flex self-center h-10 w-10">
              <img
                src={sampleAvatar}
                className="border-gray-900 rounded-full border-2"
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
