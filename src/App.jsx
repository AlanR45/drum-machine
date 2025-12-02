import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sound, setSound] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      const audio = document.getElementById(key.toUpperCase());
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        setSound(audio.dataset.sound);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function play(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    setSound(audio.dataset.sound);
    console.log(`Playing "${id}"`);
  }

  return (
    <div className="container" id="drum-machine">
      <div className="display" id="display">
        {sound}
      </div>
      <button
        className="drum-pad"
        id="heater-1"
        type="button"
        onClick={() => {
          play("Q");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
          className="clip"
          id="Q"
          data-sound="Heater 1"
        ></audio>
        Q
      </button>
      <button
        className="drum-pad"
        id="heater-2"
        type="button"
        onClick={() => {
          play("W");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
          className="clip"
          id="W"
          data-sound="Heater 2"
        ></audio>
        W
      </button>
      <button
        className="drum-pad"
        id="heater-3"
        type="button"
        onClick={() => {
          play("E");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
          className="clip"
          id="E"
          data-sound="Heater 3"
        ></audio>
        E
      </button>
      <button
        className="drum-pad"
        id="heater-4"
        type="button"
        onClick={() => {
          play("A");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
          className="clip"
          id="A"
          data-sound="Heater 4"
        ></audio>
        A
      </button>
      <button
        className="drum-pad"
        id="clap"
        type="button"
        onClick={() => {
          play("S");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
          className="clip"
          id="S"
          data-sound="Clap"
        ></audio>
        S
      </button>
      <button
        className="drum-pad"
        id="open-hh"
        type="button"
        onClick={() => {
          play("D");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
          className="clip"
          id="D"
          data-sound="Open HH"
        ></audio>
        D
      </button>
      <button
        className="drum-pad"
        id="kick-n-hat"
        type="button"
        onClick={() => {
          play("Z");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
          className="clip"
          id="Z"
          data-sound="Kick N Hat"
        ></audio>
        Z
      </button>
      <button
        className="drum-pad"
        id="kick"
        type="button"
        onClick={() => {
          play("X");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
          className="clip"
          id="X"
          data-sound="Kick"
        ></audio>
        X
      </button>
      <button
        className="drum-pad"
        id="close-hh"
        type="button"
        onClick={() => {
          play("C");
        }}
      >
        <audio
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
          className="clip"
          id="C"
          data-sound="Close HH"
        ></audio>
        C
      </button>
    </div>
  );
}

export default App;
