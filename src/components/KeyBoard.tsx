import { KEYS } from "./HangManParts";
import "./HangMan.css";
import styles from "./Keyboard.module.css";
type KeybordProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function KeyBoard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeybordProps) {
  return (
    <div className="keyboard-container">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
