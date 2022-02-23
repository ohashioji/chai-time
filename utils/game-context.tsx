import build from "next/dist/build";
import React from "react";

type GameBoardType = AnswerAttemptType[];

type AnswerAttemptType = {
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


export function buildBoard() {
    const boardArr: GameBoardType[] = [];
    let tempArr: AnswerAttemptType[] = [];
    new Array(30).fill(null).forEach((_, id) => {
        tempArr.push({
            id: id,
            value: "",
            correct: false,
            wrongIndex: false
        });

        if ((id + 1) % 5 === 0) {
            boardArr.push(tempArr);
            tempArr = [];
        }
    });
    return boardArr;
}

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



