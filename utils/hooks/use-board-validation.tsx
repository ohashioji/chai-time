import { useContext } from "react";
import GameContext from "../game-context";

export default function useBoardValidation() {
    const { board, attempt, setAttempt, setBoard } = useContext(GameContext);
    return function (word: string) {
        const charArr = word.split("").map((char, index) => ({ index, char }));
        const correctCharAndIndex = charArr
            .filter(({ char, index }) => char === board[attempt][index].value);
        const otherChars = board[attempt].filter(({ id }) => correctCharAndIndex.every(({ index }) => id !== index));
        correctCharAndIndex
            .forEach(({ index }) => {
                board[attempt][index].correct = true;
            });
        otherChars.forEach((elem) => {
            if (word.includes(elem.value)) {
                elem.wrongIndex = true;
            }
        });
        setBoard(board.slice());
        setAttempt(oldAttempt => oldAttempt + 1);
    };
}