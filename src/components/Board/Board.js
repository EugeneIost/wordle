import { useSelector } from 'react-redux';
import styles from './Board.module.scss';
import Cell from './Cell';

const Board = () => {
  const board = useSelector((state) => state.word.board);

  return (
    <div className={styles.board}>
      {board.map((row) => {
        return row.map((cell) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Cell value={cell.value} color={cell.color} />
          );
        });
      })}
    </div>
  );
};

export default Board;
