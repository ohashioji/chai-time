import React from 'react';
import styles from "./GameKey.module.scss";
interface GameKeyProps {
    children: React.ReactNode;
    correct: boolean;
    wrongIndex: boolean;
}

export default function GameKey({ children, correct, wrongIndex }: GameKeyProps) {

    let backgroundColor;
    if (correct) {
        backgroundColor = "green";
    } else if (wrongIndex) {
        backgroundColor = "yellow";
    } else {
        backgroundColor = "white";
    }

    return (
        <div className={styles["game-key"]} style={{ backgroundColor: backgroundColor }} data-testid="game-key" >
            {children}
        </div >
    );
}
