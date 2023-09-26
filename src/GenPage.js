import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import "./App.css";

function GenPage() {
  

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'13rem'}}>
      <div style={{display:'flex',flexDirection:'column',backgroundColor:'#1B2430',color:'white',padding:'2rem',borderRadius:'2rem'}}>
        <div style={{fontSize:'2rem',marginBottom:'1rem'}}>
          Generate Music
        </div>
        <div style={{padding:'1rem'}}>
          <div style={{marginBottom:'1rem'}}>
            <select style={{fontSize:'1rem',padding:'0.2rem',borderRadius:'1rem'}}>
              <option>Classical</option>
              <option>Rock</option>
              <option>Jazz</option>
              <option>Hip Hop</option>
              <option>Pop</option>
              <option>Opera</option>
            </select>
          </div>
          <div>
            <div style={{marginBottom:'1rem'}}>Enter Duration of music in Seconds</div>
            <input type="number" max={100} />
          </div>
        </div>
        <div style={{alignSelf:'center',marginTop:'1rem'}}>
          <button>Generate</button>
        </div>
        </div>
    </div>
  );
}

export default GenPage;
