import cn from 'classnames';
import styles from './Key.module.scss';
import { CellColors } from '@/components/Board/Cell/constants/cell-colors';

const Key = ({ value, onClick, color }) => {
  return (
    <div
      className={cn(styles.key, {
        [styles.key_default]: color === CellColors.DEFAULT,
        [styles.key_yellow]: color === CellColors.YELLOW,
        [styles.key_green]: color === CellColors.GREEN,
        [styles.key_grey]: color === CellColors.GREY,
      })}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Key;
