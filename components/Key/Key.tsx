import React from 'react';
import { useBoardState } from "../../utils/hooks/use-board-state";
import styles from "./Key.module.scss";

interface KeyProps {
    value: string;
}
export default function Key({ value }: KeyProps) {
    const updateBoard = useBoardState();


    
    return (
        <div className={styles["key"]} onClick={() => updateBoard(value)}>
            {value}
        </div>
    );
}
