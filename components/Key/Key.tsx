import React, { useContext, useEffect, useState } from 'react';
import GameContext from "../../utils/game-context";
import { useBoardState } from "../../utils/hooks/use-board-state";
import styles from "./Key.module.scss";

interface KeyProps {
    value: string;
}

export default function Key({ value }: KeyProps) {
    const { disabledKeys } = useContext(GameContext);
    const [disabled, setDisabled] = useState(false);
    const updateBoard = useBoardState();

    useEffect(() => {
        if (disabledKeys.includes(value)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }

    }, [disabledKeys, disabled, value]);


    function handleUpdate(value: string) {
        if (!disabled) {
            updateBoard(value);
        }
    }

    return (
        <div aria-disabled={disabled ? true : false} className={`${styles["key"]} ${disabled ? styles["key--disabled"] : ""}`} onClick={() => handleUpdate(value)}>
            {value}
        </div>
    );
}
