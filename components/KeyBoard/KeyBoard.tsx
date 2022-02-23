import React, { useContext } from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
import GameContext from "../../utils/game-context";

interface KeyBoardProps {
    word: string;
}

export default function KeyBoard({ word }: KeyBoardProps) {
    const { board, target, setTarget, attempt, setAttempt, setBoard } = useContext(GameContext);
    console.log(word);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = board[attempt].map(({ value }) => value).join('');
        if (submission === word) {
            board[attempt].forEach((elem) => {
                elem.correct = true;
            });
            const newBoard = board.slice();
            setBoard(newBoard);

        } else {
            const res = await fetch('http://localhost:3000/api/words/validate', {
                method: "POST",
                body: JSON.stringify({
                    word: submission
                })
            });
            console.log('submitted');
            const { valid } = await res.json();
            if (valid) {
                const correctCharAndIndex = word.split('').map((char, index) => ({ index, char })).filter(({ char, index }) => char === board[attempt][index].value);
                correctCharAndIndex.forEach(({ index }) => {
                    board[attempt][index].correct = true;
                });
                setBoard(board.slice());
                setAttempt(oldAttempt => oldAttempt + 1);
            }
        }

    };

    function handleBack(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (target > 0) {
            const newTarget = (oldTarget: number) => oldTarget - 1 >= 0 ? oldTarget - 1 : 0;
            const resetGuess = {
                id: newTarget(target),
                value: "",
                correct: false

            };
            board[attempt].splice(target - 1, 1, resetGuess);
            const newBoard = board.slice();
            setBoard(newBoard);
            setTarget(newTarget);
        }
    }

    return (
        <form className={styles["key-board"]} data-testid="key-board" onSubmit={handleSubmit}>
            {keyMappings.map(({ key }) => {
                return <Key key={key} value={key} />;
            })}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleBack}>Back</button>
        </form>
    );
};
