import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AudioPlayer from "react-audio-player";
import path1 from "./assets/midi/1.wav";
import path2 from "./assets/midi/2.wav";
import path3 from "./assets/midi/3.wav";
import path4 from "./assets/midi/4.wav";
import path5 from "./assets/midi/5.wav";
import path6 from "./assets/midi/6.wav";
import path7 from "./assets/midi/7.wav";
import path8 from "./assets/midi/8.wav";
import path9 from "./assets/midi/9.wav";
import path10 from "./assets/midi/10.wav";
import path11 from "./assets/midi/11.wav";
import path12 from "./assets/midi/12.wav";
import path13 from "./assets/midi/13.wav";

function GenPage() {
  const [playing, setPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const Images = [
    path1,
    path2,
    path3,
    path4,
    path5,
    path6,
    path7,
    path8,
    path9,
    path10,
    path11,
    path12,
    path13,
  ];

  const [path, setPath] = useState("");

  const getRImage = () => {
    setPlaying(true);
    const rIndex = Math.floor(Math.random() * Images.length);
    setPath(Images[rIndex]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "13rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B2430",
          color: "white",
          padding: "2rem",
          borderRadius: "2rem",
        }}
      >
        {!playing && (
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Generate Music
            </div>
            <div style={{ padding: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <select
                  style={{
                    fontSize: "1rem",
                    padding: "0.2rem",
                    borderRadius: "1rem",
                  }}
                >
                  <option>Classical</option>
                  <option>Rock</option>
                  <option>Jazz</option>
                  <option>Hip Hop</option>
                  <option>Pop</option>
                  <option>Opera</option>
                </select>
              </div>
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  Enter Duration of music in Seconds
                </div>
                <input type="number" max={100} />
              </div>
            </div>
            <div
              style={{
                alignSelf: "center",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button onClick={getRImage}>Generate</button>
            </div>
          </div>
        )}
        {playing && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2>Mugen Player</h2>
              {/* <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
              </button> */}
              <AudioPlayer src={path} autoPlay={isPlaying} controls />
              <button onClick={getRImage} style={{ marginTop: "1.5rem" }}>
                Generate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenPage;
