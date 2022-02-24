import React, { SetStateAction, useContext } from "react";
import { handleModal } from "../helpers/misc";
import ModalContext from "../modal-context";

export default function useModal() {
    const { setMessage } = useContext(ModalContext);
    return (message: string, cb: React.Dispatch<SetStateAction<boolean>>, time: number | undefined = 2000) => {
        handleModal(cb, time);
        setMessage(message);
    };
}