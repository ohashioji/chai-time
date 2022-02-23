import React, { useContext } from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
import GameContext from "../../utils/game-context";
import useBoardValidation from "../../utils/hooks/use-board-validation";
import useHandleBack from "../../utils/hooks/use-handle-back";
interface KeyBoardProps {
    word: string;
}

export default function KeyBoard({ word }: KeyBoardProps) {
    const { board, attempt, setBoard } = useContext(GameContext);
    const validateBoard = useBoardValidation();
    const handleBack = useHandleBack();
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
            const { valid } = await res.json();
            if (valid) {
                validateBoard(word);
            }
        }
    };



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
