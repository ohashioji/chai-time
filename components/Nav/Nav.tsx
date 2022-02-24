import React, { useContext } from 'react';
import GameContext from "../../utils/game-context";
import ResetButton from "../ResetButton/ResetButton";
import styles from './Nav.module.scss';
export default function Nav() {
    const {attempt } = useContext(GameContext)

    
    return (
        <header className={styles["nav"]}>
            <h1>Chai Time 🍵</h1>
            <ResetButton />
        </header>
    );
}
