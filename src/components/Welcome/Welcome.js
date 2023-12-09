import About from "../About/About";
import Login from "../Login/Login";

function Welcome({ handleLogin }) {
  return (
    <div className="h-screen flex justify-center gap-2">
        <About />
        <div>
        <Login handleLogin={handleLogin} />
        </div>
    </div>
  );
}

export default Welcome;
