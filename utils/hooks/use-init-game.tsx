import { useState } from "react";
import { GameContextType } from "../game-context";
import { buildBoard } from "../helpers/misc";

//Initialize the game with default values
export default function useInitGame(winningWord: string): GameContextType {
    const [target, setTarget] = useState(0);
    const [board, setBoard] = useState(buildBoard());
    const [attempt, setAttempt] = useState(0);
    const [disabledKeys, setDisabledKeys] = useState<string[]>([]);
    const [startTime, setStartTime] = useState(Date.now());

    return { target, setTarget, board, setBoard, attempt, setAttempt, disabledKeys, setDisabledKeys, startTime, setStartTime, winningWord };
}