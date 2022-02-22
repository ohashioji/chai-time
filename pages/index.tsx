import type { NextPage } from 'next';
import { useState } from "react";
import GameContext, { GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import dynamic from "next/dynamic";


interface IndexPageProps {
  data: string;
}

const Home = ({ data }: IndexPageProps) => {
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
  console.log(data)
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



export async function getServerSideProps() {

  const res = await fetch("http://localhost:3000/api/words");
  const data = await res.json();
  return {
    props: {
      data
    }, // will be passed to the page component as props
  };
}