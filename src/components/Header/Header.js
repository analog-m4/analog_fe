import Account from "../Account/Account";

function Header({ userStatus, setUserStatus, user, handleLogin }) {
  return (
    <div>
      <div className="header flex h-32 w-screen justify-between">
        <h1 className="text-3xl flex justify-center items-center w-72">
          Analog
        </h1>
        <Account
          userStatus={userStatus}
          setUserStatus={setUserStatus}
          handleLogin={handleLogin}
          user={user}
        />
      </div>
      <div>Render a button to route to projects if login is successful?</div>
    </div>
  );
}

export default Header;
