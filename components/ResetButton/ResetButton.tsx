import React from 'react';
import styles from './ResetButton.module.scss';
import useResetGame from "../../utils/hooks/use-reset-game";
export default function ResetButton() {
    const handleReset = useResetGame();
    return (
        <button onClick={handleReset} className={styles["reset-button"]}>Reset Game</button>
    );
}
