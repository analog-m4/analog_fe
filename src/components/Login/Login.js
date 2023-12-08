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
    <div className="login min-w-max p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
      <form className="flex flex-col mt-2">
        <input
          className="m-2 w-max bg-gray-100 p-2 rounded-md italic border border-gray-200"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          className="m-2 w-max bg-gray-100 p-2 rounded-md italic border border-gray-200"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          className="submit-button text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl mt-2 shadow-sm cursor-pointer hover:bg-purple-500"
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
