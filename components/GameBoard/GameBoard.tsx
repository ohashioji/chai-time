import React, { useContext } from 'react';
import styles from "./GameBoard.module.scss";
import GameKey from "../GameKey/GameKey";
import GameContext from "../../utils/game-context";


export default function GameBoard() {
    const { board } = useContext(GameContext);
    console.log(board)
    return (
        <section className={styles["game-board"]} data-testid="game-board">
            {board.map((row) => {
                return row.map(({ id, value, correct }) => {

                    return <GameKey key={id} correct={correct}>{value}</GameKey>;
                });

            })}

        </section>

    );
}
