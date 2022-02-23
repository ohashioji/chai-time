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
    attempt: number;
    setAttempt: React.Dispatch<React.SetStateAction<number>>;
    target: number;
    setTarget: React.Dispatch<React.SetStateAction<number>>;
    board: GameBoardType[];
    setBoard: React.Dispatch<React.SetStateAction<GameBoardType[]>>;
};




const defaultGameContext = {
    attempt: 0,
    setAttempt: () => { },
    target: 0,
    setTarget: () => { },
    board: buildBoard(),
    setBoard: () => { }
} as GameContextType;

const GameContext = React.createContext(defaultGameContext);


export default GameContext;



