import "./HangMan.css";
import {
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
} from "./HangManParts";

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];

type HangManDrawingProps = {
    numberOfGuesses : number
}

export default function HangManDrawing({numberOfGuesses}: HangManDrawingProps) {
  return (
    <div className="hangman-container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
