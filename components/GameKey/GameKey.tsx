import React from 'react';
import styles from "./GameKey.module.scss";
interface GameKeyProps {
    children: React.ReactNode;
}

export default function GameKey({ children }: GameKeyProps) {
    return (
        <div className={styles["game-key"]} data-testid="game-key">
            {children}
        </div>
    );
}
