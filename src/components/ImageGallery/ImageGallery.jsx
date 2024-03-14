import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls }) => (
        <ImageCard key={id} alt={alt_description} src={urls} />
      ))}
    </ul>
  );
};

export default ImageGallery;
