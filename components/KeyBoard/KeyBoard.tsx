import React from 'react';
import styles from "./KeyBoard.module.scss";
import keyMappings from "../../data/key-mappings.json";
import Key from "../Key/Key";
export default function KeyBoard() {
    return (
        <section className={styles["key-board"]} data-testid="key-board">
            {keyMappings.map(({ key }) => {
                return <Key key={key} value={key} />;
            })}
        </section>
    );
}
