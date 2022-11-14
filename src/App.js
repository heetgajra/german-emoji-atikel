import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍍": "Die ananas",
  "🍌": "Die banane",
  "🍻": "Das bier",
  "🍔": "Der bratling",
  "🧃": "Der apfelsaft",
  "🍕": "Die pizza",
  "🍳": "Das ei",
  "🍪": "Der cookie",
  "🍜": "Die nudel"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Wir sind nicht so gut in Deutsch";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> deutscher artikel interpretieren </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3> Artikel, die wir kennen </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.3rem", margin: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
