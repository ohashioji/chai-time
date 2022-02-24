import React from 'react';
import styles from './ResetButton.module.scss';
import useResetGame from "../../utils/hooks/use-reset-game";
import { MdRestartAlt } from "react-icons/md";
export default function ResetButton() {
    const handleReset = useResetGame();
    return (
        <button onClick={handleReset} className={styles["reset-button"]}>
            <MdRestartAlt className={styles["reset-button__icon"]} />
        </button>
    );
}
