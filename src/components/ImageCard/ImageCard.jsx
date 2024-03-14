import css from './ImageCard.module.css';

const ImageCard = ({ alt, src }) => {
  return (
    <li className={css.item}>
      <div className={css.card}>
        <img src={src.small} alt={alt} />
      </div>
    </li>
  );
};

export default ImageCard;
