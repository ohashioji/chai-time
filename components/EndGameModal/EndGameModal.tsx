import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./EndGameModal.module.scss";
import ModalContext from "../../utils/modal-context";
import GameContext from "../../utils/game-context";
import useResetGame from "../../utils/hooks/use-reset-game";
import { useSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client';
export default function EndGameModal() {
    const prisma = new PrismaClient();
    const { data: session } = useSession();
    const { message } = useContext(ModalContext);
    const { attempt, startTime } = useContext(GameContext);
    const resetGame = useResetGame();
    const [progress, setProgress] = useState(0);
    const [totalTime, setTotalTime] = useState<number>();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => progress + 0.5);
        }, 25);
        return () => clearInterval(interval);
    }, [progress]);

    useEffect(() => {
        setTotalTime(Math.round((Date.now() - startTime) / 1000));

        setTimeout(() => {
            resetGame();
        }, 5000);
    }, [resetGame, startTime]);

    return (
        <div className={styles["modal__backdrop"]}>
            <div className={styles["modal"]}>
                <h1>{message}</h1>
                <div className={styles["modal__stats"]}>
                    <p>Attempts: {attempt + 1}</p>
                    <p>Time Elapsed: {totalTime || ""} seconds...</p>
                    <p>Restarting Game...</p>
                </div>
                <div className={styles["modal__progress"]} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}


