import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/Board';
import ErrorMessage from './components/UI/ErrorMessage';
import Keyboard from './components/Keyboard';
import ModalWindow from './components/UI/ModalWindow';
import Title from './components/UI/Title';
import Wrapper from './components/UI/Wrapper';
import {
  checkButtonClick,
  resetErrorMessage,
  resetState,
} from './store/gameSlice';
import RulesButton from './components/UI/RulesButton';
import GameOver from './components/GameOver';
import Rules from './components/UI/Rules';

const App = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.game.errorMessage);
  const gameOverMessage = useSelector((state) => state.game.gameOverMessage);

  const [rulesModalIsVisible, setRulesModalIsVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(resetErrorMessage());
      }, 3000);
    }
  }, [dispatch, errorMessage]);

  useEffect(() => {
    dispatch(resetState());

    try {
      screen.orientation.lock('portrait');
    } catch (_) {
      console.log('device does not support orientation lock');
    }
  }, [dispatch]);

  const clickCheckButtonHandler = () => {
    dispatch(checkButtonClick());
  };

  const rulesButtonClickHandler = () => {
    setRulesModalIsVisible((current) => !current);
  };

  return (
    <>
      {gameOverMessage && (
        <ModalWindow>
          <GameOver />
        </ModalWindow>
      )}

      {rulesModalIsVisible && (
        <ModalWindow>
          <Rules onClick={rulesButtonClickHandler} />
        </ModalWindow>
      )}

      <Wrapper>
        <ErrorMessage isVisible={errorMessage}>{errorMessage}</ErrorMessage>
        <RulesButton onClick={rulesButtonClickHandler} />
        <Title>Угадай слово</Title>
        <Board />
        <Keyboard clickCheckButtonHandler={clickCheckButtonHandler} />
      </Wrapper>
    </>
  );
};

export default App;
