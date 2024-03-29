import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls }) => (
        <li className={css.item} key={id}>
          <ImageCard alt={alt_description} src={urls} modalOpen={modalOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
