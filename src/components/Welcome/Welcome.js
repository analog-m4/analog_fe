import Header from "../Header/Header";
import About from "../About/About";

function Welcome({ userStatus, setUserStatus, user, handleLogin }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header
          userStatus={userStatus}
          setUserStatus={setUserStatus}
          user={user}
          handleLogin={handleLogin}
        />
        <About />
      </div>
    </>
  );
}

export default Welcome;
