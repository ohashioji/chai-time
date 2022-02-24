import { useState } from "react";
import { buildBoard } from "../helpers/misc";

export default function useInitGame() {
    const [target, setTarget] = useState(0);
    const [board, setBoard] = useState(buildBoard());
    const [attempt, setAttempt] = useState(0);
    const [disabledKeys, setDisabledKeys] = useState<string[]>([]);
    const [startTime, setStartTime] = useState(Date.now());

    return { target, setTarget, board, setBoard, attempt, setAttempt, disabledKeys, setDisabledKeys, startTime, setStartTime };




}