import React from "react";
import { buildBoard } from "./helpers/misc";

export type GameBoardType = AnswerAttemptType[];

export type AnswerAttemptType = {
    id: number;
    value: string;
    correct: boolean;
    wrongIndex: boolean;
};

export type GameContextType = {
    startTime: number;
    setStartTime: React.Dispatch<React.SetStateAction<number>>;
    attempt: number;
    setAttempt: React.Dispatch<React.SetStateAction<number>>;
    target: number;
    setTarget: React.Dispatch<React.SetStateAction<number>>;
    board: GameBoardType[];
    setBoard: React.Dispatch<React.SetStateAction<GameBoardType[]>>;
    disabledKeys: string[];
    setDisabledKeys: React.Dispatch<React.SetStateAction<string[]>>;
};

const defaultGameContext = {
    startTime: Date.now(),
    setStartTime: () => { },
    attempt: 0,
    setAttempt: () => { },
    target: 0,
    setTarget: () => { },
    board: buildBoard(),
    setBoard: () => { },
    disabledKeys: [],
    setDisabledKeys: () => { }
} as GameContextType;

const GameContext = React.createContext(defaultGameContext);

export default GameContext;



