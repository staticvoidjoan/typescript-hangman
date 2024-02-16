import "./HangMan.css";

type HangManWordProps = {
    guessedLetters : string[],
    wordToGuess : string,
    reveal? : boolean
}

export default function HangManWord({guessedLetters, wordToGuess,reveal = false}: HangManWordProps) {

  return (
    <div className="word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className="word-letter" key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
