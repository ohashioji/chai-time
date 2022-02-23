import React from "react";
import GameContext from "../game-context";

export function useBoardState() {
    const { target, setTarget, board, setBoard, attempt } = React.useContext(GameContext);

    const updateBoard = (newVal: string) => {
        const charTarget = board[attempt].find((elem) => elem.id === target);
        if (charTarget) {
            const newChar = {
                ...charTarget,
                value: newVal
            };
            const charTargetIndex = board[attempt].indexOf(charTarget);
            board[attempt].splice(charTargetIndex, 1, newChar);
            const newBoard = board.slice();
            setBoard(newBoard);
            setTarget(oldTarget => oldTarget + 1);
        }
    };
    return updateBoard;

}