import { Rings } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <Rings
        visible={true}
        height="180"
        width="180"
        color="#fff"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
