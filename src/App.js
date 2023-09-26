import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import "./App.css";
import LandingPage from "./LandingPage";
import GenPage from "./GenPage";
import LoginPage from "./Login";

function App() {
  

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/mugen" element={<GenPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
