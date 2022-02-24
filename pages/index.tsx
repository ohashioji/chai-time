import { useEffect, useState } from "react";
import GameContext, { GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Nav from "../components/Nav/Nav";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { buildBoard } from "../utils/helpers/misc";
import Portal from "../components/Portal/Portal";
import Modal from "../components/MessageModal/MessageModal";
import ModalContext, { ModalContextType } from "../utils/modal-context";
import ResetButton from "../components/ResetButton/ResetButton";
import useInitGame from "../utils/hooks/use-init-game";
import EndGameModal from "../components/EndGameModal/EndGameModal";
import useResetGame from "../utils/hooks/use-reset-game";
export interface IndexPageProps {
  data: {
    word: string;
  };
}

const Home = ({ data }: IndexPageProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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