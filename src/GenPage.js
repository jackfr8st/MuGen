import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react";
import { Visualizer } from "react-sound-visualizer";
import MidiPlayer from "react-midi-player";
import LoadingScreen from "./LoadingScreen";
import { Player } from 'video-react';

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
import Visual from './assets/audioViz1.mp4';

import classicalimg from "./assets/classical.jpg";
import lofiimg from "./assets/LOFI.jpg";
import jazzimg from "./assets/jazzimg.jpeg";


const context = new (window.AudioContext || window.webkitAudioContext)(),
  source = context.createBufferSource();

function GenPage() {
  const [playing, setPlaying] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //loading spinner states
  const [bwidth, setBwidth] = useState(false);
  const [bowidth, setBowidth] = useState(false);
  const [borwidth, setBorwidth] = useState(false);

  const [test,setTest] =useState(0);


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
  const [genre, setGenre] = useState(0);
  const [duration, setDuration] = useState(10);
  const [blob, setBlob] = useState();
  const visualizerRef = useRef(null)
  const videoRef = useRef();
  const onValueChange = (e) => {
    setDuration(e.target.value);
    console.log(duration);
  };

  const handleClassical = () => {
    setGenre(0);
    setBwidth(true);
    setBowidth(false);
    setBorwidth(false);
    console.log("clicked")
  }
  let toggleClassical = bwidth ? ' active':"";

  const handleLofi = () => {
    setGenre(1);
    setBwidth(false);
    setBowidth(true);
    setBorwidth(false);
    console.log("clicked")
  }
  let toggleLofi = bowidth ? ' active':"";

  const handleJazz = () => {
    setGenre(2);
    setBwidth(false);
    setBowidth(false);
    setBorwidth(true);
    console.log("clicked")
  }
  let toggleJazz = borwidth ? ' active':"";

  const checkPlay = () => {
    videoRef.current.play();
  }

  const checkPause = () => {
    videoRef.current.pause();
  }

  const getRImage = () => {
    setIsLoading(true);
    setPlaying(2);
    fetch("http://localhost:10000/runmodel", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        genInfo: {
          duration: 10,
          genre: genre,
        },
      }),
    })
      .then((response) => response.arrayBuffer())
      .then((response) => {
        setPath(response);
        setIsLoading(false);
        console.log(response);
        const blobb = new Blob([path], { type: 'audio/midi' });
        setBlob(blobb);

        // setPlaying(2);
        //  context.decodeAudioData(response, (buffer) => {
        //   source.buffer = buffer;
        //   source.connect(context.destination);
        //   // auto play
        //   source.start(0);
        // });
      });
  };
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
  //   if(test==1)
  //   {// fetch remote audio source
  //   const 
  //     context = new (window.AudioContext || window.webkitAudioContext)(),
  //     source = context.createBufferSource();
    
  //   //fetch remote audio source
  //   fetch("https://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3")
  //     .then((response) => response.arrayBuffer())
  //     .then((response) => {
  //       context.decodeAudioData(response, (buffer) => {
  //         source.buffer = buffer;
  //         source.connect(context.destination);
  //         // auto play
  //         source.start(0);
  //       });
  //     });

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
  //   renderFrame();}
  // };

  // //connect audio visualizer to DOM and execute logic
  // useEffect(() => {
  //   audioVisualizerLogic();
  // }, []);

  const saveMidiFile = () => {

    // Convert array buffer to blob
    const blob = new Blob([path], { type: 'audio/midi' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.mid'; // Change the file name if needed
    document.body.appendChild(a);

    // Trigger a click to download the file
    a.click();

    // Remove the link from the DOM
    document.body.removeChild(a);
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
      {isLoading && <div style={{display:"flex",alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.7)',width:'100%',height:'120%',position:'absolute',zIndex:'5'}}>
          <LoadingScreen />
        </div>
           }
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
        {playing==0 && (
          <div>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Generate Music
            </div>
            <div style={{ padding: "1rem" }}>
              {/* <div style={{ marginBottom: "1rem" }}>
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
              </div> */}
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',columnGap:'1rem'}}>
                <div className={`cltile${toggleClassical}`} onClick={handleClassical} >
                  <img src={classicalimg} style={{width:120,height:130,borderRadius:20,marginBottom:'1rem'}} />
                  <div>Classical</div>
                </div>
                <div className={`lotile${toggleLofi}`} onClick={handleLofi} >
                  <img src={lofiimg} style={{width:120,height:130,borderRadius:20,marginBottom:'1rem'}} />
                  <div>Lo-fi</div>
                </div>
                <div className={`jatile${toggleJazz}`} onClick={handleJazz} >
                  <img src={jazzimg} style={{width:120,height:130,borderRadius:20,marginBottom:'1rem'}} />
                  <div>Jazz</div>
                </div>
              </div>
              {/* <div>
                <div style={{ marginBottom: "1rem" }}>
                  Enter Duration of music in Seconds
                </div>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="number"
                  max={100}
                />
              </div> */}
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
                <button onClick={getRImage} disabled={isLoading}>
                  Generate
                </button>
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
{/* 
        {playing==2 && <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
          <LoadingScreen />
        </div>
           } */}
          

        {playing==2 && (
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
              <MidiPlayer data={path} onPlay={checkPlay} onResume={checkPlay} onPause={checkPause} onEnd={checkPause} />
              

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
                  disabled={isLoading}
                >
                  Generate
                </button>
                <button
                  className="contextButton"
                  style={{ marginTop: "1.5rem" }}
                  onClick={saveMidiFile}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <button  ref={buttonRef}>Play</button> */}

      {playing==2 && <video src={Visual} ref={videoRef} className="canvas" loop={true} ></video>}
      {/* <canvas ref={canvasRef} className="canvas"></canvas> */}
      
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

