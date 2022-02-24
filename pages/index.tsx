import { useEffect, useState } from "react";
import GameContext from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Nav from "../components/Nav/Nav";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import ModalContext, { ModalContextType } from "../utils/modal-context";
import useInitGame from "../utils/hooks/use-init-game";
import dynamic from "next/dynamic";
export interface IndexPageProps {
  data: {
    word: string;
  };
}

const Home = ({ data }: IndexPageProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const Portal = dynamic(() => import("../components/Portal/Portal"));
  const Modal = dynamic(() => import("../components/MessageModal/MessageModal"));
  const EndGameModal = dynamic(() => import("../components/EndGameModal/EndGameModal"));
  const initGame = useInitGame();
  const initialModal: ModalContextType = {
    message: modalMessage,
    setMessage: setModalMessage,
  };
  return (
    <>
      <GameContext.Provider value={initGame}>
        <ModalContext.Provider value={initialModal}>
          <Nav />
          <MainWrapper>
            <GameBoard />
            <KeyBoard word={data.word} setModalIsOpen={setModalIsOpen} setGameOver={setGameOver} />
          </MainWrapper>
          <div id="modal" className="portal" />
          {modalIsOpen && (
            <Portal selector="#modal">
              <Modal />
            </Portal>
          )}{gameOver && (
            <Portal selector="#modal">
              <EndGameModal />
            </Portal>
          )}
        </ModalContext.Provider>
      </GameContext.Provider>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const { SERVER_URL } = process.env;
  //get a word from server
  const res = await fetch(`${SERVER_URL}/api/words`);
  const data = await res.json();
  return {
    props: {
      data
    },
  };
};