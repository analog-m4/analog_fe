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
    <form className="flex flex-col mt-2">
      <input
        className="m-2 w-max"
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        className="m-2 w-max"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        className="submit-button"
        onClick={(e) => handleSubmit(e)}
        disabled={!username || !password}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
