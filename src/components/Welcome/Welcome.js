import Header from "../Header/Header";
import About from "../About/About";
import Login from "../Login/Login";

function Welcome({ handleLogin }) {
  return (
    <>
      <div className="flex flex-col h-screen items-center">
        <p>Welcome to Analog</p>
        <About />
        <Login handleLogin={handleLogin} />
      </div>
    </>
  );
}

export default Welcome;
