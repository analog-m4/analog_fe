import Header from "../Header/Header";
import About from "../About/About";

function Welcome({ userStatus, user, handleLogin }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header
          userStatus={userStatus}
          user={user}
          handleLogin={handleLogin}
        />
        <About />
      </div>
    </>
  );
}

export default Welcome;
