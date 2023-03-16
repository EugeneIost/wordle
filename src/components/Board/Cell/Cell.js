import cn from 'classnames';
import styles from './Cell.module.scss';
import { CellColors } from '../../../constants/cell-colors';

const Cell = ({ value, color, isActive }) => {
  return (
    <div
      className={cn(styles.cell, {
        [styles.cell_rotate]: color !== CellColors.DEFAULT,
        [styles.cell_active]: isActive,
      })}
    >
      <span
        className={cn(styles.cell__front, {
          [styles['cell__front_input-animation']]: value,
        })}
      >
        {value}
      </span>

      {color !== CellColors.DEFAULT && (
        <span
          className={cn(styles.cell__back, {
            [styles.cell__back_yellow]: color === CellColors.YELLOW,
            [styles.cell__back_green]: color === CellColors.GREEN,
            [styles.cell__back_grey]: color === CellColors.GREY,
          })}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default Cell;
