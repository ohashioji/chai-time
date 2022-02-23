import { useState } from "react";
import GameContext, { GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Nav from "../components/Nav/Nav";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { buildBoard } from "../utils/helpers/misc";
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
    <>
      <Nav />
      <MainWrapper>
        <GameContext.Provider value={initialContext}>
          <GameBoard />
          <KeyBoard word={data.word} />
        </GameContext.Provider>
      </MainWrapper>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  //get a word from server
  const res = await fetch("http://localhost:3000/api/words");
  const data = await res.json();
  return {
    props: {
      data
    }, // will be passed to the page component as props
  };
}