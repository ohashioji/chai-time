import React, { SetStateAction, useContext } from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
import GameContext from "../../utils/game-context";
import useBoardValidation from "../../utils/hooks/use-board-validation";
import useHandleBack from "../../utils/hooks/use-handle-back";
import { handleModal } from "../../utils/helpers/misc";
import ModalContext from "../../utils/modal-context";
interface KeyBoardProps {
    word: string;
    setModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function KeyBoard({ word, setModalIsOpen }: KeyBoardProps) {
    const { SERVER_URL } = process.env;
    const { board, attempt, setBoard } = useContext(GameContext);
    const { setMessage } = useContext(ModalContext);
    const validateBoard = useBoardValidation();
    const handleBack = useHandleBack();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = board[attempt].map(({ value }) => value).join('');
        if (submission.length < 5) {
            setModalIsOpen(true);
            setMessage('Please fill in all the letters');
            return;
        }
        if (submission === word) {
            board[attempt].forEach((elem) => {
                elem.correct = true;
            });
            const newBoard = board.slice();
            setBoard(newBoard);
            setMessage("You win!");
            handleModal(setModalIsOpen);

        } else {
            const res = await fetch(`/api/words/validate`, {
                method: "POST",
                body: JSON.stringify({
                    word: submission
                })
            });
            const { valid } = await res.json();
            if (valid) {
                validateBoard(word);
            } else {
                setMessage("Word is not in the list");
                handleModal(setModalIsOpen);
            }
        }
    };



    return (
        <form className={styles["key-board"]} data-testid="key-board" onSubmit={handleSubmit}>
            {keyMappings.map(({ key }) => {
                return <Key key={key} value={key} />;
            })}
            <button className={styles["key-board__submit"]} type="submit">Submit</button>
            <button className={styles["key-board__back"]} type="button" onClick={handleBack}>Back</button>
        </form>
    );
};
