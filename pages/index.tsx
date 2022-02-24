import { useEffect, useState } from "react";
import GameContext, { GameContextType } from "../utils/game-context";
import GameBoard from "../components/GameBoard/GameBoard";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Nav from "../components/Nav/Nav";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { buildBoard } from "../utils/helpers/misc";
import Portal from "../components/Portal/Portal";
import Modal from "../components/Modal/Modal";
import ModalContext, { ModalContextType } from "../utils/modal-context";
import ResetButton from "../components/ResetButton/ResetButton";
import useInitGame from "../utils/hooks/use-init-game";
export interface IndexPageProps {
  data: {
    word: string;
  };
}

const Home = ({ data }: IndexPageProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const initGame = useInitGame();
  const initialModal: ModalContextType = {
    message: modalMessage,
    setMessage: setModalMessage,
  };

  return (
    <>
      <Nav />
      <ModalContext.Provider value={initialModal}>
        <div id="modal" className="portal" />
        {modalIsOpen && (
          <Portal selector="#modal">
            <Modal />
          </Portal>
        )}
        <MainWrapper>
          <GameContext.Provider value={initGame}>
            {/* <ResetButton /> */}
            <GameBoard />
            <KeyBoard word={data.word} setModalIsOpen={setModalIsOpen} />
          </GameContext.Provider>
        </MainWrapper>
      </ModalContext.Provider>

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