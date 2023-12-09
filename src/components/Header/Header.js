import Account from "../Account/Account";

function Header({ userStatus }) {
  return (
    <div>
      <div className="header flex h-32 w-full justify-between">
        <div className="text-5xl flex justify-center items-center w-72 font-fjalla italic">
          ANA
          <div className="header-2 text-5xl font-fjalla italic text-purple-600 hover:animate-jump cursor-pointer" onClick={() => window.location.href = '/'}>
            LOG
          </div>
        </div>
        <Account
          userStatus={userStatus}
          // user={user}
        />
      </div>
    </div>
  );
}

export default Header;
