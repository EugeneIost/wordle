import cn from 'classnames';
import styles from './Cell.module.scss';
import { CellColors } from './constants/cell-colors';

const Cell = ({ value, color }) => {
  return (
    <div
      className={cn(styles.cell, {
        [styles.cell_default]: color === CellColors.DEFAULT,
        [styles.cell_yellow]: color === CellColors.YELLOW,
        [styles.cell_green]: color === CellColors.GREEN,
        [styles.cell_grey]: color === CellColors.GREY,
      })}
    >
      {value}
    </div>
  );
};

export default Cell;
