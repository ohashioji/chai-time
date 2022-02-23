import React from 'react';
import styles from './Nav.module.scss';
export default function Nav() {
    return (
        <header className={styles["nav"]}>
            <nav>
                <h1>Word Guess</h1>
            </nav>
        </header>
    );
}
