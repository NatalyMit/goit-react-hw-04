import { useEffect, useState } from 'react';
import './App.css';
import { ImSpinner } from 'react-icons/im';
import { HiOutlineFaceFrown } from 'react-icons/hi2';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhotos } from './apiService/apiService';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Loader } from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...results]);
        setIsVisible(page < total_pages);

        console.log(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const handleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
  };
  const handleOpenModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalUrl('');
    setModalAlt('');
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} modalOpen={handleOpenModal} />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading' : 'Load More'}
        </LoadMoreBtn>
      )}
      {!images.length && !isEmpty && !isError && (
        <p>
          Lets begin search <ImSpinner width={20} />
        </p>
      )}

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isEmpty && (
        <p>
          No results found. Please try again.
          <HiOutlineFaceFrown />
        </p>
      )}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={handleCloseModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
