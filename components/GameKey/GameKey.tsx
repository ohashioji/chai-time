import React from 'react';
import styles from "./GameKey.module.scss";
interface GameKeyProps {
    children: React.ReactNode;
    correct: boolean;
    wrongIndex: boolean;
}

export default function GameKey({ children, correct, wrongIndex }: GameKeyProps) {
    return (
        <div className={`${styles["game-key"]} ${correct && styles["game-key--jump"]} ${correct ? styles["game-key--correct"] : ""} ${wrongIndex ? styles["game-key--wrong-index"] : ""}`} data-testid="game-key" >
            {children}
        </div >
    );
}
