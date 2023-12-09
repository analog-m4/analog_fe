import { useState } from "react";

function Login({ handleLogin }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };
    handleLogin();
    clearInputs();
  }

  function clearInputs() {
    setUserName("");
    setPassword("");
  }

  return (
    <div className="login min-w-max p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:w-2/3 md:w-1/2 lg:w-1/3">
      <form className="flex flex-col mt-2">
        <input
          className="mb-2 w-full bg-gray-100 p-2 rounded-md italic border border-gray-200 text-sm"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          className=" w-full bg-gray-100 p-2 rounded-md italic border border-gray-200 text-sm"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          className="submit-button text-xs sm:text-sm text-white flex items-center font-lato bg-purple-600 h-8 self-center pl-4 pr-4 rounded-3xl mt-3 shadow-sm cursor-pointer hover:bg-purple-500"
          onClick={(e) => handleSubmit(e)}
          disabled={!username || !password}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
