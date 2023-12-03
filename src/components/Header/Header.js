import Account from "../Account/Account";

function Header({ userStatus, handleLogin }) {
  return (
    <div>
      <div className="header flex h-32 w-full justify-between">
        <h1 className="text-3xl flex justify-center items-center w-72 font-fjalla">
          Analog
        </h1>
        <Account
          userStatus={userStatus}
          handleLogin={handleLogin}
          // user={user}
        />
      </div>
    </div>
  );
}

export default Header;
