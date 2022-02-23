import React, { createContext, SetStateAction } from 'react';


export type ModalContextType = {
    message: string;
    setMessage: React.Dispatch<SetStateAction<string>>;
};

const defaultContext = {
    message: '',
    setMessage: () => { }
} as ModalContextType;

const ModalContext = createContext(defaultContext);

export default ModalContext;