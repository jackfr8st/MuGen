import React from "react";
// import "./App.css";

function App() {
  const [Login, setLogin] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { type, name, value } = event.target;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));

    // console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Login.username);
    console.log(Login.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        id="usName"
        onChange={handleChange}
        value={Login.username}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={Login.password}
      />

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default App;
