import React from 'react';
import styles from "./GameKey.module.scss";
interface GameKeyProps {
    children: React.ReactNode;
    correct: boolean;
    wrongIndex: boolean;
    notInWord: boolean;
}

const GameKey = React.memo(function GameKey({ children, correct, wrongIndex, notInWord }: GameKeyProps) {
    return (
        <div className={`${styles["game-key"]} 
        ${correct && styles["game-key--jump"]} 
        ${correct ? styles["game-key--correct"] : ""} 
        ${wrongIndex ? styles["game-key--wrong-index"] : ""}
        ${notInWord ? styles["game-key--not-in-word"] : ""}`}
            data-testid="game-key" >
            {children}
        </div >
    );
});
export default GameKey;

