import React, { useContext } from 'react';
import ModalContext from "../../utils/modal-context";
import styles from './MessageModal.module.scss';
export default function MessageModal() {
    const { message } = useContext(ModalContext);
    return (
        <div className={styles["message-modal"]}>
            <h1>{message}</h1>
        </div>
    );
}
