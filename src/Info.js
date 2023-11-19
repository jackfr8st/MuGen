import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import piano from "./assets/piano.png";
import rock from "./assets/rock.jpg";
import classical from "./assets/classical.png";
import edm from "./assets/edm.jpg";
import lofi from "./assets/lofi2.jpg";
import jazz from "./assets/jazz.png";

function InfoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        style={{
          marginTop: "0.5rem",
          padding: "1rem 0.25rem 0.25rem 1rem",
          position: "fixed",
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
          justifyContent: "center",
          marginTop: "-10rem",
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
            Music Genre
          </div>
          <div
            style={{
              paddingRight: "2rem",
              fontSize: 16,
              color: "#f2f2e4",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>
              A music genre is a conventional category that identifies some
              pieces of music as belonging to a shared tradition or set of
              conventions. Music can be divided into different genres in many
              different ways. The artistic nature of music means that these
              classifications are often subjective and controversial, and some
              genres may overlap.
            </div>

            <div style={{ margin: "1rem 0" }}>
              Below are some of the top genres in the music industry currently :
            </div>

            {/* classical */}
            <div>
              <div
                style={{
                  marginTop: "1.25rem",
                  fontSize: 18,
                  color: "#D6D5A8",
                }}
              >
                1. Classical Music
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem auto",
                }}
              >
                <img
                  src={classical}
                  style={{
                    height: "22rem",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                Emerging as "Classical Harmony" in Europe, Classical music has
                resonated globally since the 1700s. It is a genre rooted in
                orchestral arrangements, although it has evolved to incorporate
                a diverse range of instruments. Defining Classical music
                precisely can be challenging due to its rich instrumentation.
                Its intricate and refined melodies appeal to a broad audience.
                Beethoven, Mozart, Bach, and Tchaikovsky stand as influential
                composers who have left an indelible mark on the classical music
                landscape.
              </div>
            </div>

            {/* lo-fi */}
            <div>
              <div
                style={{
                  marginTop: "1.25rem",
                  fontSize: 18,
                  color: "#D6D5A8",
                }}
              >
                2. Lo-Fi Music
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem auto",
                }}
              >
                <img
                  src={lofi}
                  style={{
                    height: "22rem",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                Emerging as a musical genre in the late 20th century, Lo-fi
                music has carved its niche in the global music scene. A style
                characterized by its laid-back, low-fidelity production, Lo-fi
                music is rooted in simplicity and imperfection. Its mellow and
                soothing tones resonate with listeners seeking a tranquil escape
                from the hectic pace of modern life. Chillhop, lo-fi beats, and
                ambient sounds are synonymous with the genre, making it a
                favorite for relaxation and focused work. Artists like Nujabes,
                J Dilla, and Idealism have become iconic figures, shaping the
                landscape of contemporary Lo-fi music. With its calming vibes
                and widespread appeal, Lo-fi continues to captivate audiences
                around the world.
              </div>
            </div>

            {/* jazz */}
            <div>
              <div
                style={{
                  marginTop: "1.25rem",
                  fontSize: 18,
                  color: "#D6D5A8",
                }}
              >
                3. Jazz Music
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem auto",
                }}
              >
                <img
                  src={jazz}
                  style={{
                    height: "22rem",
                    borderColor: "white",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                Identified with swing and blue notes, Jazz has its roots both in
                the West African and European culture. It is said that Jazz is
                “One of America’s original art forms” and boasts a unique
                combination of creativity, coactions and interactivity.
                Originating in the late 19th to early 20th century, Jazz has
                also played an important role in introducing the world to a
                number of women performers like Ella Fitzgerald, Betty Carter,
                Abbey Lincoln and Ethel Waters.
              </div>
            </div>

            {/* rock */}
            <div>
              <div
                style={{
                  marginTop: "1.25rem",
                  fontSize: 18,
                  color: "#D6D5A8",
                }}
              >
                4. Rock Music
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem auto",
                }}
              >
                <img
                  src={rock}
                  style={{
                    height: "22rem",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                Originated as “Rock & Roll” in the United States, Rock music has
                been rocking the world since the 1950s. It is a form of music
                that started actually around string instruments, but now uses
                other modern instruments too making it a little difficult to
                give it an accurate definition. Its loud and strong beats make
                it popular among the youths. The Doors, Metallica, Nirvana and
                Megadeth are the modern bands who have taken the culture by
                storm.
              </div>
            </div>

            {/* edm*/}
            <div>
              <div
                style={{
                  marginTop: "1.25rem",
                  fontSize: 18,
                  color: "#D6D5A8",
                }}
              >
                5. EDM Music
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem auto",
                }}
              >
                <img
                  src={edm}
                  style={{
                    height: "22rem",
                  }}
                />
              </div>
              <div style={{ display: "block" }}>
                Electronic Dance Music or EDM, is form of music is produced by
                DJs who add dozens of tones to a piece to create unique music.
                You can hear them in clubs or even live, depending upon your
                accessibility for the same. In the early twenties, electronic
                dance music was known in the form of Jamaican dub music, the
                electronic music of Kraftwerk, the disco music of Giorgio
                Moroder, the Yellow Magic Orchestra and many more.
                <a
                  href="https://medium.com/giglue/top-10-genres-of-music-industry-7f19cdb177cb"
                  style={{ marginLeft: "0.2rem" }}
                >
                  Learn about other genres!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
