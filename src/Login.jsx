import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [Login, setLogin] = React.useState({
    username: "",
    password: "",
  });
  const [Register, setRegister] = React.useState({
    username: "",
    password: "",
  });
  const [signin, setSignIn] = useState(false);
  const [signout, setSignOut] = useState(false);

  function handleChange(event) {
    const { type, name, value } = event.target;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));

    // console.log(event.target.value);
  }
  const [showRegister, setShowRegister] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function handleRChange(event) {
    const { type, name, value } = event.target;

    setRegister((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));

    // console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(Login.username);
    console.log(Login.password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Login.username, Login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSignIn(true);
        navigate("/mugen");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    console.log(Register.username);
    console.log(Register.password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Register.username, Register.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUserInfo = { ...user };
        newUserInfo.complect("Successfully Created");
        newUserInfo.isSignIn = true;
        newUserInfo.error = "";
        setShowRegister(false);
        setShowMessage(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    navigate("/mugen");
  }
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setSignOut(true);
        setSignIn(false);
      })
      .catch((error) => {
        // An error happened
      });
  };

  return (
    //   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    //     {!signin && <div><div>Login</div>
    //     <div><form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Email"
    //     name="username"
    //     id="usName"
    //     onChange={handleChange}
    //     value={Login.username}
    //   />

    //   <input
    //     type="password"
    //     placeholder="Password"
    //     name="password"
    //     onChange={handleChange}
    //     value={Login.password}
    //   />

    //   <button type="submit" className="form-button">
    //     Submit
    //   </button>
    // </form></div>
    // <div>Register</div>
    // <div><form onSubmit={handleRegisterSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Email"
    //     name="username"
    //     id="usName"
    //     onChange={handleRChange}
    //     value={Register.username}
    //   />

    //   <input
    //     type="password"
    //     placeholder="Password"
    //     name="password"
    //     onChange={handleRChange}
    //     value={Register.password}
    //   />

    //   <button type="submit" className="form-button">
    //     Submit
    //   </button>
    // </form></div></div>}
    //     {/* <div>
    //       <button onClick={loginWithGoogle}>Login with Google</button>
    //     </div> */}
    //     {signin && <div>
    //       <div>Signed In Successfully</div>
    //      <div>
    //       <button onClick={handleSignout}>Sign Out</button>
    //     </div>
    //     </div>}
    //     {signout && <div>Signed Out Successfully</div>}
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8rem",
      }}
    >
      {!showRegister && (
        <div class="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div class="inputbox">
              {/* <input 
                type="text" placeholder="Email" required
                onChange={handleChange}
                value={Login.username}
                /> */}
              <input
                type="text"
                placeholder="Email"
                name="username"
                id="usName"
                onChange={handleChange}
                value={Login.username}
              />
            </div>

            <div class="inputbox">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={Login.password}
              />
            </div>

            {/* <div class="forgot">
                <label> <input
                type="checkbox"/>Remember me</label>
                <a href="forgot.html">Forgot Password</a>
            </div> */}
            <button type="submit" class="btn">
              Login
            </button>

            {!showMessage && (
              <div
                class="Register"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label>Dont have a Account?</label>
                <div style={{ marginTop: "1rem" }}>
                  <button
                    onClick={() => setShowRegister(true)}
                    style={{
                      cursor: "pointer",
                      color: "rgb(255, 89, 0)",
                      borderColor: "rgb(255, 89, 0)",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
            {showMessage && <div>Registered Successfully</div>}
          </form>
        </div>
      )}
      {showRegister && (
        <div class="wrapper">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Register</h1>

            <div class="inputbox">
              {/* <input 
                type="text" placeholder="Email" required
                onChange={handleChange}
                value={Login.username}
                /> */}
              <input
                type="text"
                placeholder="Email"
                name="username"
                id="usName"
                onChange={handleRChange}
                value={Register.username}
              />
            </div>

            <div class="inputbox">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRChange}
                value={Register.password}
              />
            </div>

            {/* <div class="forgot">
                <label> <input
                type="checkbox"/>Remember me</label>
                <a href="forgot.html">Forgot Password</a>
            </div> */}
            <button type="submit" class="btn">
              Register
            </button>

            <div
              class="Register"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>Already have an Account?</label>
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => setShowRegister(false)}
                  style={{
                    cursor: "pointer",
                    color: "rgb(255, 89, 0)",
                    borderColor: "rgb(255, 89, 0)",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
