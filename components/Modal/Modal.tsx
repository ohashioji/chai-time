import React, { useContext } from 'react';
import ModalContext from "../../utils/modal-context";
import styles from './Modal.module.scss';
export default function Modal() {
    const { message } = useContext(ModalContext);
    return (
        <div className={styles["modal"]}>
            <h1>{message}</h1>
        </div>
    );
}
