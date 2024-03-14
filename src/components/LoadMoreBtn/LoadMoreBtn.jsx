import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={css.button}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
