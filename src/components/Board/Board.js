import { useSelector } from 'react-redux';
import styles from './Board.module.scss';
import Cell from './Cell';

const Board = () => {
  const board = useSelector((state) => state.game.board);
  const currentRowIndex = useSelector((state) => state.game.currentRowIndex);
  const currentCharIndex = useSelector((state) => state.game.currentCharIndex);

  return (
    <div className={styles.board}>
      {board.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              value={cell.value}
              color={cell.color}
              isActive={
                rowIndex === currentRowIndex && cellIndex === currentCharIndex
              }
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
