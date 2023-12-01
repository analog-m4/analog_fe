function Account({ userStatus, user, handleLogin }) {
  return (
    <div className="nav flex gap-2 pr-5">
      {userStatus === false ? (
        <>
          <div
            className="text-xl flex items-center"
            onClick={() => handleLogin()}
          >
            Login
          </div>
          <div className="text-xl flex items-center">Join Now</div>
        </>
      ) : (
        <>
          <div className="text-xl flex items-center">Logged In!</div>
          <p className="text-xl flex items-center">Welcome {user.username}</p>
        </>
      )}
    </div>
  );
}

export default Account;
