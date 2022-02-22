import React from "react";
import GameContext from "../game-context";

export function useBoardState() {
    const { target, setTarget, board, setBoard } = React.useContext(GameContext);

    const updateBoard = (newVal: string) => {
        const charTarget = board.find((elem) => elem.id === target);
        if (charTarget) {
            const newChar = {
                ...charTarget,
                value: newVal
            };
            const charTargetIndex = board.indexOf(charTarget);
            board.splice(charTargetIndex, 1, newChar);
            const newBoard = board.slice();
            setBoard(newBoard);
            setTarget(oldTarget => oldTarget + 1);
        }
    };
    return updateBoard;

}