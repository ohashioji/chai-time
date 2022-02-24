import React, { SetStateAction, useContext } from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
import GameContext from "../../utils/game-context";
import useBoardValidation from "../../utils/hooks/use-board-validation";
import useHandleBack from "../../utils/hooks/use-handle-back";
import useModal from "../../utils/hooks/use-modal";
import useResetGame from "../../utils/hooks/use-reset-game";
interface KeyBoardProps {
    word: string;
    setModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
    setGameOver: React.Dispatch<SetStateAction<boolean>>;
}

export default function KeyBoard({ word, setModalIsOpen, setGameOver }: KeyBoardProps) {
    const { board, attempt, setBoard, setTotalTime } = useContext(GameContext);
    const handleModal = useModal();
    const validate = useBoardValidation();
    const handleBack = useHandleBack();
    const resetGame = useResetGame();
    console.log(word);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = board[attempt].map(({ value }) => value).join('');
        if (submission.length < 5) {
            handleModal("Please enter a full word", setModalIsOpen);
            return;
        }
        if (submission === word) {
            board[attempt].forEach((elem) => {
                elem.correct = true;
            });
            const newBoard = board.slice();
            setBoard(newBoard);

            handleModal("You Win!", setGameOver, 5000);

        } else {
            const res = await fetch(`/api/words/validate`, {
                method: "POST",
                body: JSON.stringify({
                    word: submission
                })
            });
            const { valid } = await res.json();
            if (valid) {
                validate(word);
            } else if (attempt === 5) {
                setTotalTime(Date.now());
                handleModal("You Lose :(", setGameOver, 5000);
                resetGame();
            } else {
                handleModal("Word is not in the list", setModalIsOpen);
            }
        };
    };

    return (
        <form className={styles["key-board"]} data-testid="key-board" onSubmit={handleSubmit}>
            {keyMappings.map(({ key }) => {
                return <Key key={key} value={key} />;
            })}
            <button className={styles["key-board__back"]} type="button" onClick={handleBack}>Back</button>
            <button className={styles["key-board__submit"]} type="submit">Submit</button>
        </form>
    );
};
