import React, { useCallback, useContext } from 'react';
import GameContext from "../game-context";
import { buildBoard } from "../helpers/misc";
import { useRouter } from "next/router";
//Similar to init game hook but you can lazily initialize the game
export default function useResetGame() {
    const router = useRouter();
    const { setAttempt, setTarget, setBoard, setDisabledKeys, setStartTime } = useContext(GameContext);
    return useCallback(function () {
        router.replace(router.asPath);
        setStartTime(Date.now());
        setAttempt(0);
        setTarget(0);
        setBoard(buildBoard());
        setDisabledKeys([]);
    }, [router, setAttempt, setTarget, setBoard, setDisabledKeys, setStartTime]);
}
