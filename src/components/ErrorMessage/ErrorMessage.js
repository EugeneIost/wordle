import styles from './ErrorMessage.module.scss';
import cn from 'classnames';

const ErrorMessage = ({ children, isError }) => {
  return (
    <div
      className={cn(styles.errorMessage__container, {
        [styles.errorMessage__container_active]: isError,
      })}
    >
      <p className={styles.errorMessage}>{children}</p>
    </div>
  );
};

export default ErrorMessage;
