import type { NextPage } from 'next';
import { useState } from "react";
import GameContext, { GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import MainWrapper from "../components/MainWrapper/MainWrapper";


const Home: NextPage = () => {
  const [target, setTarget] = useState(0);
  const [board, setBoard] = useState(new Array(30).fill(null).map((_, id) => ({
    id: id,
    value: ""
  })));
  const initialContext: GameContextType = {
    target,
    setTarget,
    board,
    setBoard
  };
  return (
    <MainWrapper>
      <GameContext.Provider value={initialContext}>
        <GameBoard />
        <KeyBoard />
      </GameContext.Provider>
    </MainWrapper>
  );
};

export default Home;
