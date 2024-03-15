import css from './ImageCard.module.css';

const ImageCard = ({ alt, src, modalOpen }) => {
  return (
    <div className={css.card} onClick={() => modalOpen(src.regular, alt)}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
};

export default ImageCard;
