import Header from "../Header/Header";
import About from "../About/About";

function Welcome() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <p>Welcome to Analog</p>
        <About />
      </div>
    </>
  );
}

export default Welcome;
