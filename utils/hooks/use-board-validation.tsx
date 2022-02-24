import { useContext } from "react";
import GameContext from "../game-context";

export default function useBoardValidation() {
    const { board, attempt, setAttempt, setBoard, setDisabledKeys, disabledKeys } = useContext(GameContext);
    return function (word: string) {
        const charArr = word.split("").map((char, index) => ({ index, char }));
        const correctCharAndIndex = charArr
            .filter(({ char, index }) => char === board[attempt][index].value);
        const otherChars = board[attempt].filter(({ id }) => correctCharAndIndex.every(({ index }) => id !== index));
        correctCharAndIndex
            .forEach(({ index }) => {
                //if char is in correct index, remove wrongIndex flag
                const elem = board[attempt][index];
                elem.correct = true;
                elem.wrongIndex = false;
            });
        otherChars.forEach((elem) => {
            if (word.includes(elem.value)) {
                //dont mark correct elements as wrongIndex
                if (!elem.correct) {
                    elem.wrongIndex = true;
                }
            } else {
                disabledKeys.push(elem.value);
                elem.notInWord = true
                setDisabledKeys(disabledKeys.slice());
            }
        });
        setBoard(board.slice());
        setAttempt(oldAttempt => oldAttempt + 1);
    };
}