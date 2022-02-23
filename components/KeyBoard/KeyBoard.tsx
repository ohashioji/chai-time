import React, { useContext } from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
import GameContext from "../../utils/game-context";

export default function KeyBoard() {
    const { board, attempt } = useContext(GameContext);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = board[attempt].map(({ value }) => value).join('');
        console.log(submission);
        const res = await fetch('http://localhost:3000/api/words/validate', {
            method: "POST",
            body: JSON.stringify({
                word: submission
            })

        });
        console.log('submitted');
        const { valid } = await res.json();
        if (valid) {
            console.log('valid');
        }
    };


    return (
        <form className={styles["key-board"]} data-testid="key-board" onSubmit={handleSubmit}>
            {keyMappings.map(({ key }) => {
                return <Key key={key} value={key} />;
            })}
            <button type="submit">Submit</button>
            <button>Back</button>
        </form>
    );
};
