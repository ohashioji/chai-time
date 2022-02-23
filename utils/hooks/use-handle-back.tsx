import { useContext } from "react";
import GameContext from "../game-context";

export default function useHandleBack() {
    const { target, board, setBoard, setTarget, attempt } = useContext(GameContext);
    return function (e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (target > 0) {
            const newTarget = (oldTarget: number) => oldTarget - 1 >= 0 ? oldTarget - 1 : 0;
            const resetGuess = {
                id: newTarget(target),
                value: "",
                correct: false,
                wrongIndex: false

            };
            board[attempt].splice(newTarget(target) % 5, 1, resetGuess);
            const newBoard = board.slice();
            setBoard(newBoard);
            setTarget(newTarget);
        }
    };
}