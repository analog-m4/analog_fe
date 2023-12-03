import Account from "../Account/Account";

function Header({ userStatus, handleLogin }) {
  return (
    <div>
      <div className="header flex h-32 w-full justify-between">
        <div className="text-3xl flex justify-center items-center w-72 font-fjalla italic">
          ANA
        <div className="text-3xl font-fjalla italic text-purple-600">LOG</div>
        </div>
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
