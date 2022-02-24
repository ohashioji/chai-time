import React from 'react';
import ResetButton from "../ResetButton/ResetButton";
import styles from './Nav.module.scss';
export default function Nav() {
    return (
        <header className={styles["nav"]}>
            <h1>Chai Time 🍵</h1>
            <ResetButton />
        </header>
    );
}
