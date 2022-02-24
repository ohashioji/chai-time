import React, { useContext } from 'react';
import GameContext from "../game-context";
import { buildBoard } from "../helpers/misc";

export default function useResetGame() {
    const { setAttempt, setTarget, setBoard, setDisabledKeys } = useContext(GameContext);
    return function () {
        setAttempt(0);
        setTarget(0);
        setBoard(buildBoard());
        setDisabledKeys([]);
    };
}
