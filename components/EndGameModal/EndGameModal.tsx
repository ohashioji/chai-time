import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./EndGameModal.module.scss";
import ModalContext from "../../utils/modal-context";
import GameContext from "../../utils/game-context";


export default function EndGameModal() {
    const { message } = useContext(ModalContext);
    // const { attempt } = useContext(GameContext);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => progress + 0.5);
        }, 25);
        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className={styles["modal__backdrop"]}>
            <div className={styles["modal"]}>
                <h1>{message}</h1>
                <div className={styles["modal__stats"]}>
                    <p>Restarting Game...</p>
                </div>
                <div className={styles["modal__progress"]} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}


