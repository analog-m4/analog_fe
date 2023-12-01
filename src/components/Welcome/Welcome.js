import Header from "../Header/Header";
import About from "../About/About";

function Welcome({ userStatus, setUserStatus }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header userStatus={userStatus} setUserStatus={setUserStatus} />
        <About />
      </div>
    </>
  );
}

export default Welcome;
