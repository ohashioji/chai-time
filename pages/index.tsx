import type { NextPage } from 'next';
import { useState } from "react";
import GameContext, { buildBoard, GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import MainWrapper from "../components/MainWrapper/MainWrapper";
export interface IndexPageProps {
  data: {
    word: string;
  };
}

const Home = ({ data }: IndexPageProps) => {
  const [target, setTarget] = useState(0);
  const [board, setBoard] = useState(buildBoard());
  const [attempt, setAttempt] = useState(0);
  const initialContext: GameContextType = {
    attempt,
    setAttempt,
    target,
    setTarget,
    board,
    setBoard
  };

  return (
    <MainWrapper>
      <GameContext.Provider value={initialContext}>
        <GameBoard />
        <KeyBoard word={data.word} />
      </GameContext.Provider>
    </MainWrapper>
  );
};

export default Home;



export async function getServerSideProps() {

  const res = await fetch("http://localhost:3000/api/words");
  const data = await res.json();
  return {
    props: {
      data
    }, // will be passed to the page component as props
  };
}