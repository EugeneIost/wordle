import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Title from './components/UI/Title';
import Wrapper from './components/UI/Wrapper';
import {
  resetEnteredWord,
  setCurrentRowColor,
  setWord,
} from './store/wordSlice';
import { words } from './constatns/words';
import { dictionary } from '@/constatns/dictionary';
import ErrorMessage from './components/ErrorMessage';
import ModalWindow from './components/UI/ModalWindow';

const App = () => {
  const dispatch = useDispatch();
  const enteredWord = useSelector((state) => state.word.enteredWord);
  const guessWord = useSelector((state) => state.word.word);
  const currentRowIndex = useSelector((state) => state.word.currentRowIndex);
  const [isError, setIsError] = useState(null);
  const [endGameMessage, setEndGameMessage] = useState('');

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [isError]);

  useEffect(() => {
    if (currentRowIndex > 5) {
      setEndGameMessage('Вы проиграли!');
    }
  }, [currentRowIndex, setEndGameMessage]);

  useEffect(() => {
    dispatch(setWord(words[Math.trunc(Math.random() * words.length - 1)]));
  }, [dispatch]);

  const clickCheckButtonHandler = () => {
    if (
      enteredWord.length > 0 &&
      dictionary.find((word) => {
        return word === enteredWord.toLowerCase();
      })
    ) {
      dispatch(resetEnteredWord());
      dispatch(setCurrentRowColor());
      setIsError(false);
      if (enteredWord.toLowerCase() === guessWord) {
        setEndGameMessage('Вы угадали слово!');
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <Wrapper>
      {endGameMessage && (
        <ModalWindow setEndGameMessage={setEndGameMessage}>
          {endGameMessage}
        </ModalWindow>
      )}
      <ErrorMessage isError={isError}>
        Введенного слова не существует в словаре или в нем не достаточно букв!
      </ErrorMessage>
      <Title>Угадай слово</Title>
      <Board />
      <Keyboard clickCheckButtonHandler={clickCheckButtonHandler} />
    </Wrapper>
  );
};

export default App;
