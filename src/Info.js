import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import piano from "./assets/piano.png";

function InfoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        style={{
          margin: "0.5rem",
          padding: "1rem 0.25rem 0.25rem 1rem",
        }}
      >
        <button onClick={() => navigate("/")}>Go back</button>
      </nav>

      {/* first para */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-5rem",
        }}
      >
        <div
          style={{
            width: "65%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D6D5A8",
            padding: "1.5rem",
            borderRadius: "1rem",
            margin: "5rem",
            textAlign: "justify",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 28,
              alignSelf: "flex-start",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            What is Music Theory?
          </div>
          <div
            style={{
              marginLeft: "0.5rem",
              paddingRight: "2rem",
              fontSize: 16,
              color: "#f2f2e4",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>
              Simply put, music theory is the language with which we communicate
              musical ideas. It allows us to put our ideas into words,
              communicate those ideas with other musicians, and organize our
              thoughts, feelings, and propositions into a language that we all
              as musicians can understand. It’s a language that transcends
              national boundaries, cultures, religions, political views and when
              you look at it that way, one of the greatest achievements of
              humankind. Musical theory examines the fundamentals of music. It
              also provides a system to interpret musical compositions.
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={piano}
                style={{
                  margin: "2rem auto",
                  display: "inline",
                  height: "15rem",
                }}
              />
            </div>
            <div>
              The musical alphabet comprises 12 notes labeled with the letters A
              through G, but begins with the letter “C”. This is because the
              major musical key associated with “C” contains no sharp or flat
              notes, in other words, it contains all of the white keys on the
              piano. Therefore, this is considered “home base” when we begin a
              discussion about music theory.
            </div>
            <div style={{ display: "block", marginTop: "1rem" }}>
              Sharps (#) and flats (♭) are notes between notes. If we start on a
              white key and move up to a black key, the note is sharp. If we
              start on a white key and move down to a black key, the note is
              flat. These are called accidentals.
              <a
                href="https://tonegym.co/blog/item?id=music-theory-basics"
                style={{ marginLeft: "0.2rem" }}
              >
                Click here to learn more!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second para */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "-2rem",
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
              fontSize: 28,
              alignSelf: "flex-start",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            What is MuGen?
          </div>
          <div>
            Music composition has long been a testament to human creativity, but
            recent advances in machine learning have ushered in a new era of
            computer-assisted music generation. We introduce MuGen, a pioneering
            music generation website that harnesses the power of Generative
            Adversarial Networks (GANs) and spectrogram transformations to
            create original musical compositions. MuGen represents a fusion of
            cutting-edge technology and artistic expression, offering musicians
            and composers a tool that opens new dimensions of creativity.
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
