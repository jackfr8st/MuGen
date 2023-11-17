import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import logo from "./assets/MuGen-logo.png";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import robot from "./assets/robot.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer sticky={{ start: 0, end: 3 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <button onClick={() => navigate("/login")}>Signin</button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          factor={1.5}
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} style={{ marginTop: "10rem" }} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          factor={1}
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: "linear-gradient(#020918,#060203)",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#51557E",
                color: "#D6D5A8",
                padding: "1.5rem",
                borderRadius: "2rem",
                margin: "5rem",
                textAlign: "justify",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                What is MuGen?
              </div>
              <div>
                Music composition has long been a testament to human creativity,
                but recent advances in machine learning have ushered in a new
                era of computer-assisted music generation. We introduce MuGen, a
                pioneering music generation website that harnesses the power of
                Generative Adversarial Networks (GANs) and spectrogram
                transformations to create original musical compositions. MuGen
                represents a fusion of cutting-edge technology and artistic
                expression, offering musicians and composers a tool that opens
                new dimensions of creativity.
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.2, end: 2 }} speed={0.3}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "3rem",
            }}
          >
            <div style={{ marginTop: "3rem", marginLeft: "9rem" }}>
              <img src={robot} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          factor={2}
          offset={1.8}
          speed={0.5}
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer factor={1} offset={1.5} speed={0.5}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#51557E",
                color: "#D6D5A8",
                padding: "1.5rem",
                borderRadius: "2rem",
                margin: "5rem",
                marginTop: "5rem",
                textAlign: "justify",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                How does Mugen Work?
              </div>
              <div>
                Central to MuGen's innovative approach is the transformation of
                audio data into spectrogram images. This paradigm shift in music
                representation involves segmenting audio into short time
                intervals, applying the Fast Fourier Transform (FFT) to extract
                spectral information, and mapping the resulting spectra to a
                visual format. The resulting spectrogram images encapsulate the
                essence of music in a novel visual medium, opening up a world of
                possibilities for creative exploration.
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          factor={0.5}
          offset={3.5}
          speed={0.5}
          style={{
            backgroundColor: "#020001",
            backgroundSize: "cover",
          }}
        >
          <div>Footer</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPage;
