import { deleteLastChar, setEnteredChar } from '@/store/gameSlice';
import { useDispatch } from 'react-redux';

import backspaceIcom from '../../assets/icons/backspace.png';
import Key from './Key';
import styles from './Keyboard.module.scss';

const keyboard = [
  ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
  ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
  ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'],
];

const Keyboard = ({ clickCheckButtonHandler }) => {
  const dispatch = useDispatch();
  const clickKeyboardButtonHandler = (key) => {
    dispatch(setEnteredChar(key));
  };

  return (
    <div className={styles.keyboard}>
      {keyboard.map((line, lineIndex) => (
        <div key={lineIndex} className={styles.keyboard__line}>
          {line.map((char) => (
            <Key
              key={char}
              value={char}
              onClick={() => {
                clickKeyboardButtonHandler(char);
              }}
            />
          ))}

          {lineIndex === 2 && (
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
          )}
        </div>
      ))}

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
