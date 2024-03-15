import css from './ImageCard.module.css';

const ImageCard = ({ alt, src, modalOpen }) => {
  return (
    <li className={css.item}>
      <div className={css.card} onClick={() => modalOpen(src.regular, alt)}>
        <img className={css.image} src={src.small} alt={alt} />
      </div>
    </li>
  );
};

export default ImageCard;
