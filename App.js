import React, { useState, useEffect } from "react";
import "./App.css";
import photo1 from "./image/photo1.jpeg";
import photo2 from "./image/photo2.jpeg";
import photo3 from "./image/photo3.jpeg";
import red from "./image/red.jpeg";
import im from "./image/im.jpeg";


function App() {

  const [pin, setPin] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBlast, setShowBlast] = useState(false);
  

const loveMessages = [
  "I was enchanted to meet you 💜",
  "Dance with you in a storm🌙",
  "when we're apart im missing you..✨",
  "love you to the moon and to saturn✨",
  "I want to marry you with paper rings",
  "Darling just hold my hands✨",
  "At the end of the story,you're holdin' me tight💙",
  "Meet you at midnight rain✨",
  "Dear lord when i get to heaven please let me bring my man🌙",
  "I'd choose you in every lifetime💜",
  "I keep recalling things we never did😊",
  "you're all that I need🌸",
  "Let the world burn for you😭"
];

  const correctPin = "08072005";

  const quotes = [
    "You are my favorite notification 💜",
    "No next love,cuz I promised myself that you'll be my last✨",
    "My love doesn't ask for anything in return🌙",
    "My only tulip🌷"
  ];



  // CLOCK

  const [clock, setClock] = useState("");

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      setClock(
        now.toLocaleTimeString()
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // QUOTES

  useEffect(() => {

    const interval = setInterval(() => {

      setQuoteIndex((prev) =>
        (prev + 1) % quotes.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // COUNTDOWN

  useEffect(() => {

    const countdown = () => {

      const birthday = new Date(
        "June 6, 2026 00:00:00"
      ).getTime();

      const now = new Date().getTime();

      const gap = birthday - now;

      const days = Math.floor(
        gap / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (gap % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m`
      );

    };

    countdown();

    const interval = setInterval(
      countdown,
      1000
    );

    return () => clearInterval(interval);

  }, []);

  // PIN

  const addNumber = (num) => {

    if (pin.length < 8) {

      setPin(pin + num);

    }

  };

  const deleteNumber = () => {

    setPin(pin.slice(0, -1));

  };

  const checkPin = () => {

    if (pin === correctPin) {

      setLoading(true);

      setTimeout(() => {

        setLoading(false);
        setStep(2);

      }, 3500);

    } else {

      alert("Wrong Password 💔");
      setPin("");

    }

  };

  return (

    <div className="app">

      {/* GALAXY */}

      <div className="stars"></div>

      {/* FLOATING THINGS */}

      <div className="float f1">🦋</div>
      <div className="float f2">🌷</div>
      <div className="float f3">💜</div>
      <div className="float f4">✨</div>
      <div className="float f5">🎈</div>

      {/* MOON */}

      <div className="moon">🌙</div>

      {/* CLOUDS */}

      <div className="cloud c1">☁️</div>
      <div className="cloud c2">☁️</div>

      {/* HEART RAIN */}

      <div className="rain r1">💜</div>
      <div className="rain r2">💙</div>
      <div className="rain r3">💖</div>

      {/* MUSIC PLAYER */}

      <div className="music-player">

  <audio id="bgMusic" loop>
    <source src={process.env.PUBLIC_URL + "/daydream.mp4"} type="audio/mp4" />
  </audio>

  <button
    onClick={() =>
      document.getElementById("bgMusic").play()
    }
  >
    🎵 Play Music
  </button>

</div>
      {/* CLOCK */}

      <div className="clock">
        ⏰ {clock}
      </div>

      {/* PAGE 1 */}

      {!loading && step === 1 && (

        <div className="card">

          <h1 className="title">
            Enter Secret Code 💜
          </h1>

          <div className="otp-container">

            {[0,1,2,3,4,5,6,7].map((index) => (

              <div className="otp-box" key={index}>
                {pin[index] ? "•" : ""}
              </div>

            ))}

          </div>

          {/* KEYPAD */}

          <div className="keypad">

            <button onClick={() => addNumber("1")}>1</button>
            <button onClick={() => addNumber("2")}>2</button>
            <button onClick={() => addNumber("3")}>3</button>

            <button onClick={() => addNumber("4")}>4</button>
            <button onClick={() => addNumber("5")}>5</button>
            <button onClick={() => addNumber("6")}>6</button>

            <button onClick={() => addNumber("7")}>7</button>
            <button onClick={() => addNumber("8")}>8</button>
            <button onClick={() => addNumber("9")}>9</button>

            <button onClick={deleteNumber}>⌫</button>
            <button onClick={() => addNumber("0")}>0</button>
            <button onClick={checkPin}>💖</button>

          </div>

        </div>

      )}
      

      {/* LOADING */}

      {loading && (

        <div className="loading-screen">

          <div className="love-meter">

            <div className="love-fill"></div>

          </div>

          <div className="spinner"></div>

          <h1>Loading Love Memories 💜</h1>

        </div>

      )}

      {/* PAGE 2 */}

      {!loading && step === 2 && (

        <div className="birthday-page">

          <div className="confetti">🎊 🎉 ✨</div>

          <h1 className="birthday-title">
            Happy Birthday San💜
          </h1>

          <div className="date-card">

            <div className="date-main">
              06 / 06 / 2004
            </div>

            <div className="line"></div>

            <div className="future-date">
              06 / 06 / 2026
            </div>

          </div>

          <div className="timer-box">
            ⏳ {timeLeft}
          </div>

          <button
            onClick={() => setStep(3)}
          >
            Open Surprise ✨
          </button>

        </div>

      )}

      {/* PAGE 3 */}

      {!loading && step === 3 && (

        <div className="love-page">

          {selectedPage === "" && (

            <>

              <h1 className="birthday-reveal">
                HAPPY BIRTHDAY 💜
              </h1>

              {/* QUOTES */}

              <div className="quotes">
                💭 {quotes[quoteIndex]}
              </div>
              <div className="magic-section">
            
  <button
    className="magic-orb"
    onClick={() => setShowBlast(true)}
  >
    💜
  </button>
  

  <p className="orb-text">
    Click Me ✨
  </p>

</div>

{showBlast &&
  loveMessages.map((msg, index) => (

    <div
      key={index}
      className="blast-message"
      style={{
        left: `${Math.random() * 80}%`,
        animationDelay: `${index * 0.8}s`
      }}
    >
      {msg}
    </div>

  ))
}

              {/* CARDS */}

              <div className="cards-container">

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("letter")
                  }
                >
                  💌 Love Letter
                </div>

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("gallery")
                  }
                >
                  📸 Gallery
                </div>

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("future")
                  }
                >
                  🌷 OUR STORY TIMELINE 🌷
                </div>

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("reasons")
                  }
                >
                  💖 Love youuu!!!
                </div>

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("chat")
                  }
                >
                🎇
                </div>

                <div
                  className="memory-card"
                  onClick={() =>
                    setSelectedPage("coupons")
                  }
                >
                  🎂Cut cake
                </div>

              </div>

            </>

          )}

          {/* LETTER */}

          {selectedPage === "letter" && (

            <div className="inside-page">

              <h1>💌 Love Letter</h1>

              <div
  style={{
    maxHeight: "350px",
    overflowY: "auto",
    textAlign: "left",
    lineHeight: "1.8",
    color: "white",
    padding: "10px"
  }}
>

  <p>Happy Birthday to my chloo 😁</p>

  <p>
    You are my only tulip in a garden full of flowers,
    and somehow, you always give me a reason to smile.
    More often than I admit, I find myself secretly
    yearning for you in every way I can.
  </p>

  <p>
    The love I have for you is difficult to put into words.
    I don't know if I've ever shown it enough,
    but it has always been you in my heart,
    and I don't need your permission to love you.
  </p>

  <p>
    On your special day, I hope you enjoy every little second,
    cherish every beautiful moment, and remain grateful for all
    the wonderful things life has given you.
    Even if I am not a part of your story,
    my heart will always wish the best for you.
  </p>

  <p>
    My only wish is that your life is filled with peace,
    happiness, and countless reasons to smile.
    And if fate allows, I wish to keep seeing you from afar,
    quietly happy knowing that you are doing well,
    even if you never know that I'm wishing for your happiness.
  </p>

  <p>
    Happy Birthday once again.
    May this year bring you everything your heart deserves.
  </p>

  <p>
    With all my unspoken affection,
    <br />
    Your only admirer 🌷
  </p>

</div>

              <button
                onClick={() =>
                  setSelectedPage("")
                }
              >
                ⬅ Back
              </button>

            </div>

          )}

          {/* GALLERY */}

          {selectedPage === "gallery" && (

  <div className="inside-page">

    <h1>📸 Gallery</h1>

    <div className="gallery">

      <div className="polaroid">
        <img src={photo1} alt="Memory 1" className="gallery-img" />
        <p>💖</p>
      </div>

      <div className="polaroid">
        <img src={photo2} alt="Memory 2" className="gallery-img" />
        <p>🌙</p>
      </div>

      <div className="polaroid">
        <img src={photo3} alt="Memory 3" className="gallery-img" />
        <p>✨</p>
      </div>

    </div>

    <button onClick={() => setSelectedPage("")}>
      ⬅ Back
    </button>

  </div>

)}

          {/* FUTURE */}

          {selectedPage === "future" && (

            <div className="inside-page">

              <h1>Our story timeline</h1>

              <div className="timeline">
                <br/>

  📩 First Chat
  <br />
  04 December 2025
  <br /><br />

  🤍 First Voice Message
  <br />
  11 January 2026
  <br /><br />

  😊 Became Lovers
  <br />
  14 January 2026
  <br /><br />

  😂 Funniest Memory
  <br />
  IYKYK 😂
  <br /><br />

  💜 Today
  <br />
  The Special Day 😮‍💨
  <br />

</div>

              <button
                onClick={() =>
                  setSelectedPage("")
                }
              >
                ⬅ Back
              </button>

            </div>

          )}

          {/* REASONS */}

          {selectedPage === "reasons" && (

            <div className="inside-page">

              

              <div className="timeline">
  <img src={im} alt="im" className="timeline-img" />
</div>

              <button
                onClick={() =>
                  setSelectedPage("")
                }
              >
                ⬅ Back
              </button>

            </div>

          )}

          {/* CHAT */}

          {selectedPage === "chat" && (

  <div className="inside-page">

    <h1>🎆 Birthday Fireworks 🎆</h1>

    <div className="fireworks-container">

      <div className="firework">🎆</div>
      <div className="firework">🎇</div>
      <div className="firework">✨</div>
      <div className="firework">🎉</div>
      <div className="firework">🎊</div>
      <div className="firework">💜</div>

    </div>

    <button
      onClick={() => setSelectedPage("")}
    >
      ⬅ Back
    </button>

  </div>

)}
          {/* COUPONS */}

          {selectedPage === "coupons" && (

            <div className="inside-page">

              <h1>🎂 Cut cake</h1>

              <div className="timeline">

                 <img src={red} alt="red" />
              </div>

              <button
                onClick={() =>
                  setSelectedPage("")
                }
              >
                ⬅ Back
              </button>

            </div>

          )}

        </div>

      )}

    </div>
 
 
  );

}

export default App;