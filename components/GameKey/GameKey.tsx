import React from 'react';
import styles from "./GameKey.module.scss";
interface GameKeyProps {
    children: React.ReactNode;
    correct: boolean;
}

export default function GameKey({ children, correct }: GameKeyProps) {
    return (
        <div className={styles["game-key"]} style={{ backgroundColor: correct ? "green" : "white" }} data-testid="game-key" >
            {children}
        </div >
    );
}
