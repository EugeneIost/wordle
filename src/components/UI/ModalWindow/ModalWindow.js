import { useDispatch, useSelector } from 'react-redux';
import styles from './ModalWindow.module.scss';
import Title from '../Title';
import resetIcon from '../../../assets/icons/reset.png';
import { resetStates } from '@/store/wordSlice';

const ModalWindow = ({ children, setEndGameMessage }) => {
  const guessWord = useSelector((state) => state.word.word);
  const currentRowIndex = useSelector((state) => state.word.currentRowIndex);
  const dispatch = useDispatch();
  const clickResetButtonHandler = () => {
    setEndGameMessage('');
    dispatch(resetStates());
  };
  return (
    <>
      <div className={styles.modal}>
        <Title>{children}</Title>
        <div>
          <h2 className={styles.modal__word}>Загаданное слово: {guessWord}</h2>
          <p className={styles.modal__attempts}>
            Количество попыток: {currentRowIndex}
          </p>
        </div>
        <div className={styles.modal__reset} onClick={clickResetButtonHandler}>
          <p className={styles['modal__reset-text']}>Начать сначала</p>
          <img
            src={resetIcon}
            alt="reset"
            className={styles['modal__reset-icon']}
          />
        </div>
      </div>
      <div className={styles.modal__overlay} />
    </>
  );
};

export default ModalWindow;
