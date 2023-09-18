import React from "react";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import "./App.css";
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
    navigate('/mugen');
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
    const newUserInfo= {...user};
    newUserInfo.complect("Successfully Created");
    newUserInfo.isSignIn=true;
    newUserInfo.error="";
    setSignIn(true);
    navigate('/mugen');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setSignOut(true);
      setSignIn(false);
    }).catch((error) => {
      // An error happened
    });
  }


  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {!signin && <div><div>Login</div>
      <div><form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Email"
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
  </form></div>
  <div>Register</div>
  <div><form onSubmit={handleRegisterSubmit}>
    <input
      type="text"
      placeholder="Email"
      name="username"
      id="usName"
      onChange={handleRChange}
      value={Register.username}
    />

    <input
      type="password"
      placeholder="Password"
      name="password"
      onChange={handleRChange}
      value={Register.password}
    />

    <button type="submit" className="form-button">
      Submit
    </button>
  </form></div></div>}
      {/* <div>
        <button onClick={loginWithGoogle}>Login with Google</button>
      </div> */}
      {signin && <div>
        <div>Signed In Successfully</div>
       <div>
        <button onClick={handleSignout}>Sign Out</button>
      </div> 
      </div>}
      {signout && <div>Signed Out Successfully</div>}
  </div>
  );
}

export default LoginPage;
