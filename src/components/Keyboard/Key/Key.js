import { CellColors } from '@/constants/cell-colors';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './Key.module.scss';

const Key = ({ value, onClick }) => {
  const color = useSelector((state) => {
    return state.game.highlightedKeys[value.toLowerCase()];
  });

  return (
    <div
      className={cn(styles.key, {
        [styles.key_default]: !color || color === CellColors.DEFAULT,
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
