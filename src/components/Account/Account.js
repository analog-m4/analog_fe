function Account({ userStatus, setUserStatus }) {

  return (
    <div className="nav flex gap-2 pr-5">
      {userStatus === false ? (
        <>
          <div className="text-xl flex items-center">Login</div>
          <div className="text-xl flex items-center">Join Now</div>
        </>
      ) : (
        <>
          <div className="text-xl flex items-center">Logged In!</div>
        </>
      )}
  </div>
  )
}

export default Account;