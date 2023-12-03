import { useSelector } from "react-redux";

function Account({ userStatus, handleLogin }) {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="nav flex gap-5 w-1/6 sm:w-1/4">
        {userStatus === false ? (
          <>
            <div
              className="login-btn text-sm flex items-center font-lato"
              onClick={() => handleLogin()}
            >
              LOGIN
            </div>
            <div className="join-btn text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl">JOIN NOW</div>
          </>
        ) : (
          <>
            <div className="text-md flex items-center">Logged In!</div>
            <p className="text-md flex items-center">Welcome {user.username}</p>
          </>
        )}
      </div>
    );
  }
}

export default Account;
