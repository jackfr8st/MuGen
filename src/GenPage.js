import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react";
import { Visualizer } from "react-sound-visualizer";
import MidiPlayer from "react-midi-player";

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
import midipath from "./assets/midi/103.midi";

const context = new (window.AudioContext || window.webkitAudioContext)(),
source = context.createBufferSource();

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
  const [genre,setGenre] = useState(0);
  const [duration,setDuration] = useState(10);

  const onValueChange = (e) =>{
    setDuration(e.target.value)
    console.log(duration);
  }

  const getRImage = () => {
    setPlaying(true);
    fetch("http://localhost:10000/runmodel", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        genInfo:{
          duration:duration,
          genre:genre
        }
      })
    })
      .then((response) => response.arrayBuffer())
      .then((response) => {
        console.log(response);
         setPath(response);
        //  context.decodeAudioData(response, (buffer) => {
        //   source.buffer = buffer;
        //   source.connect(context.destination);
        //   // auto play
        //   source.start(0);
        // });
        });
      }
    // const rIndex = Math.floor(Math.random() * Images.length);
    // setPath(Images[rIndex]);
  // const [audio, setAudio] = useState<MediaStream | null>(null);

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       audio: true,
  //       video: false,
  //     })
  //     .then(setAudio);
  // }, []);

  const canvasRef = useRef(null),
    buttonRef = useRef(null);

  // const audioVisualizerLogic = () => {
    

  //   // fetch remote audio source
    
  //       // context.decodeAudioData(path, (buffer) => {
  //       //   source.buffer = buffer;
  //       //   source.connect(context.destination);
  //       //   // auto play
  //       //   source.start(0);
  //       // });
      

  //   const audio = new Audio(source),
  //     canvas = canvasRef.current,
  //     muteButton = buttonRef.current;

  //   //mute or play on click
  //   const mutePlay = () => {
  //     context.state === "running" ? context.suspend() : context.resume();
  //   };
  //   muteButton.onclick = () => mutePlay();

  //   //config canvas
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const ctx = canvas.getContext("2d");

  //   //config audio analyzer
  //   const analyser = context.createAnalyser();
  //   source.connect(analyser);
  //   analyser.connect(context.destination);
  //   analyser.fftSize = 256;
  //   const bufferLength = analyser.frequencyBinCount,
  //     dataArray = new Uint8Array(bufferLength),
  //     WIDTH = canvas.width,
  //     HEIGHT = canvas.height,
  //     barWidth = (WIDTH / bufferLength) * 2.5;
  //   let barHeight = null,
  //     x = null;

  //   //core logic for the visualizer
  //   const timeouts = [];
  //   const renderFrame = () => {
  //     ctx.fillStyle = "rgba(0,0,0,0)";
  //     requestAnimationFrame(renderFrame);
  //     x = 0;
  //     analyser.getByteFrequencyData(dataArray);
  //     ctx.fillRect(0, 0, WIDTH, HEIGHT);

  //     for (let i = 0; i < bufferLength; i++) {
  //       //color based upon frequency
  //       barHeight = dataArray[i];
  //       let r = barHeight * 1,
  //         g = 0,
  //         b = barHeight * 4.5;
  //       ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  //       ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
  //       x += barWidth + 1;

  //       //Allows visualizer to overlay on a background/video by clearing the rects after painting.
  //       let timer = setTimeout(() => {
  //         ctx.clearRect(0, 0, WIDTH, HEIGHT);
  //       }, 50);
  //       timeouts.push(timer);
  //     }
  //   };
  //   //Clears the accumulating timeouts.
  //   setTimeout(() => {
  //     for (let i = 0; i < timeouts.length; i++) {
  //       return clearTimeout(timeouts[i]);
  //     }
  //   }, 51);
  //   renderFrame();
  // };

  // //connect audio visualizer to DOM and execute logic
  // useEffect(() => {
  //   audioVisualizerLogic();
  // }, []);



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
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value={0}>Classical</option>
                  <option value={1}>Lo-fi Hip Hop</option>
                  <option value={2}>Jazz</option>
                  
                </select>
              </div>
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  Enter Duration of music in Seconds
                </div>
                <input onChange={(e) => onValueChange(e)} type="number" max={100} />
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <button onClick={getRImage}>Generate</button>
                <button
                  className="contextButton"
                  ref={buttonRef}
                  style={{ display: "none" }}
                >
                  Play Music
                </button>
              </div>
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
              {/* <AudioPlayer src={midipath} autoPlay={isPlaying} controls style={{backgroundColor:'black'}} /> */}
              <MidiPlayer data={path} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "4rem",
                }}
              >
                <button
                  onClick={getRImage}
                  style={{ marginTop: "1.5rem", marginRight: "2rem" }}
                >
                  Generate
                </button>
                <button
                  className="contextButton"
                  ref={buttonRef}
                  style={{ marginTop: "1.5rem" }}
                >
                  Play Music
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <canvas ref={canvasRef} className="canvas"></canvas>
      {/* <Visualizer audio={audio}>
        {({ canvasRef, stop, start, reset }) => (
          <>
            <canvas ref={canvasRef} width={500} height={100} />

            <div>
              <button onClick={start}>Start</button>
              <button onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </>
        )}
      </Visualizer> */}
    </div>
  );
}

export default GenPage;




  //test
  //   const canvasRef = useRef(null);
  //   const buttonRef = useRef(null);
  //   const audioVisualizerLogic = () => {
  //   const context = new (window.AudioContext || window.webkitAudioContext)();
  //   const canvas = canvasRef.current;
  //   const muteButton = buttonRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // MIDI.js is a library for working with MIDI files
  //   // You can install it via npm or include it in your HTML
  //   const MIDI = require("midi.js");

  //   // Load the MIDI file from a local path
  //   MIDI.Player.loadFile("./assets/midi/103.midi", function() {
  //     // When the MIDI file is loaded, set up the audio visualization logic
  //     const analyser = context.createAnalyser();
  //     analyser.connect(context.destination);
  //     analyser.fftSize = 256;
  //     const bufferLength = analyser.frequencyBinCount;
  //     const dataArray = new Uint8Array(bufferLength);
  //     const WIDTH = canvas.width;
  //     const HEIGHT = canvas.height;
  //     const barWidth = (WIDTH / bufferLength) * 2.5;
  //     let x = null;

  //     const renderFrame = () => {
  //       ctx.fillStyle = "rgba(0, 0, 0, 0)";
  //       requestAnimationFrame(renderFrame);
  //       x = 0;
  //       analyser.getByteFrequencyData(dataArray);
  //       ctx.fillRect(0, 0, WIDTH, HEIGHT);

  //       for (let i = 0; i < bufferLength; i++) {
  //         // Color based upon frequency
  //         const barHeight = dataArray[i];
  //         const r = barHeight + 22 * (i / bufferLength);
  //         const g = 333 * (i / bufferLength);
  //         const b = 47;
  //         ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  //         ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
  //         x += barWidth + 1;
  //       }
  //     };

  //     renderFrame();

  //     // When you click the button, start or stop MIDI playback
  //     muteButton.onclick = () => {
  //       if (MIDI.Player.playing) {
  //         MIDI.Player.stop();
  //       } else {
  //         MIDI.Player.start();
  //       }
  //     };
  //   });
  // };

  // useEffect(() => {
  //   audioVisualizerLogic();
  // }, []);