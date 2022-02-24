import React, { SetStateAction } from "react";
import { GameBoardType, AnswerAttemptType } from "../game-context";

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

export function handleModal(cb: React.Dispatch<SetStateAction<boolean>>, time: number) {
    cb(true);
    setTimeout(() => {
        cb(false);
    }, time);
}


