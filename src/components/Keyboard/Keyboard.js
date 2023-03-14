import { useDispatch, useSelector } from 'react-redux';
import { setInputChar, deleteLastChar } from '@/store/wordSlice';

import Key from './Key';
import styles from './Keyboard.module.scss';
import backspaceIcom from '../../assets/icons/backspace.png';
import { CellColors } from '../Board/Cell/constants/cell-colors';

const keyboard = {
  firstLine: ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
  secondLine: ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
  thirdLine: ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'],
};

const Keyboard = ({ clickCheckButtonHandler }) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.word.board);
  const clickKeyboardButtonHandler = (key) => {
    dispatch(setInputChar(key));
  };

  const setColorOfKey = (key) => {
    const cellColors = board.map((row) =>
      row.find((cell) => cell.value === key)
    );

    const keyColor = cellColors.reduce((color, cell) => {
      if (!cell) {
        return color;
      }

      if (cell.color === CellColors.GREEN) {
        color = cell.color;
        return color;
      }

      if (cell.color === CellColors.YELLOW && color !== CellColors.GREEN) {
        color = cell.color;
        return color;
      }

      if (cell.color === CellColors.GREY) {
        color = cell.color;
        return color;
      }

      return color;
    }, CellColors.DEFAULT);
    return keyColor;
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboard__line}>
        {keyboard.firstLine.map((char) => (
          <Key
            key={char}
            value={char}
            onClick={() => {
              clickKeyboardButtonHandler(char);
            }}
            color={setColorOfKey(char)}
          />
        ))}
      </div>
      <div className={styles.keyboard__line}>
        {keyboard.secondLine.map((char) => (
          <Key
            key={char}
            value={char}
            onClick={() => {
              clickKeyboardButtonHandler(char);
            }}
            color={setColorOfKey(char)}
          />
        ))}
      </div>
      <div className={styles.keyboard__line}>
        {keyboard.thirdLine.map((char) => (
          <Key
            key={char}
            value={char}
            onClick={() => {
              clickKeyboardButtonHandler(char);
            }}
            color={setColorOfKey(char)}
          />
        ))}
        <div
          className={styles.keyboard__backspace}
          onClick={() => {
            dispatch(deleteLastChar());
          }}
        >
          <img
            src={backspaceIcom}
            alt="backspace"
            className={styles['keyboard__backspace-icon']}
          />
        </div>
      </div>
      <button
        type="button"
        className={styles.keyboard__button}
        onClick={clickCheckButtonHandler}
      >
        Проверить слово
      </button>
    </div>
  );
};

export default Keyboard;
