import { useContext } from "react";
import GameContext from "../game-context";

export default function useHandleBack() {
    const { target, board, setBoard, setTarget, attempt } = useContext(GameContext);
    return function (e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        //Minimum value you can delete to is: 5 * the attempt number + 1 (attempt is zero indexed) - 5. 
        //Otherwise you will delete into previous attempt
        const floor = ((5 * (attempt + 1)) - 5);
        if (target > floor) {
            const newTarget = (oldTarget: number) => oldTarget - 1 >= floor ? oldTarget - 1 : floor;
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