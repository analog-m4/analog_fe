import Header from "../Header/Header";
import About from "../About/About";
import Login from "../Login/Login";

function Welcome({ handleLogin }) {
  return (
    <div className="h-screen flex justify-center">
        <About />
        {/* <Login handleLogin={handleLogin} /> */}
    </div>
  );
}

export default Welcome;
