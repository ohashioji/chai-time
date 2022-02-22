import React from "react";

type GameBoardType = {
    id: number;
    value: string;
};


export type GameContextType = {
    target: number;
    setTarget: React.Dispatch<React.SetStateAction<number>>;
    board: GameBoardType[];
    setBoard: React.Dispatch<React.SetStateAction<GameBoardType[]>>;
};


const defaultGameContext = {
    target: 0,
    setTarget: () => { },
    board: new Array(30).fill(null).map((_, id) => ({
        id: id,
        value: ""
    })),
    setBoard: () => { }
} as GameContextType;

const GameContext = React.createContext(defaultGameContext);


export default GameContext;



