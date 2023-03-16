import styles from './ModalWindow.module.scss';

const ModalWindow = ({ children }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.modal__overlay} />
    </>
  );
};

export default ModalWindow;
